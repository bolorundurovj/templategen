import fs from 'fs';
import net from 'net';
import path from 'path';
import { execSync, spawn, spawnSync } from 'child_process';

const IS_WINDOWS = process.platform === 'win32';
const MAX_BUFFER = 256 * 1024 * 1024;
const OUTPUT_TAIL = 8000;

export interface RunOptions {
  timeoutMs?: number;
  env?: NodeJS.ProcessEnv;
  allowFailure?: boolean;
}

export interface RunResult {
  ok: boolean;
  output: string;
}

export interface ServerHandle {
  pid: number | undefined;
  output: () => string;
  exited: () => boolean;
  stop: () => Promise<void>;
}

export interface WaitForHttpOptions {
  timeoutMs?: number;
  expectedStatus?: number;
  bodyContains?: string;
  server?: ServerHandle;
}

const sleep = (ms: number) =>
  new Promise<void>((r) => setTimeout(r, ms).unref());

const INHERITED_ENV_BLOCKLIST =
  /^(JEST_WORKER_ID|npm_config_.*|npm_lifecycle_.*|npm_package_.*|npm_execpath|npm_node_execpath|INIT_CWD)$/i;

const childEnv = (env: NodeJS.ProcessEnv = {}): NodeJS.ProcessEnv => {
  const base: NodeJS.ProcessEnv = {};
  for (const [key, value] of Object.entries(process.env)) {
    if (!INHERITED_ENV_BLOCKLIST.test(key)) {
      base[key] = value;
    }
  }
  return { ...base, FORCE_COLOR: '0', ...env };
};

const tail = (text: string, size = OUTPUT_TAIL) =>
  text.length > size ? `...${text.slice(-size)}` : text;

export const stripAnsi = (str: string) =>
  str.replace(/\x1B\[[0-9;?]*[a-zA-Z]/g, '').replace(/\x1B\([B0]/g, '');

export const safeRmSync = (dir: string) => {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, {
        recursive: true,
        force: true,
        maxRetries: 20,
        retryDelay: 500,
      });
    }
  } catch {}
};

export const moveDir = (from: string, to: string) => {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  try {
    fs.renameSync(from, to);
  } catch {
    fs.cpSync(from, to, { recursive: true });
    safeRmSync(from);
  }
};

export const ensureDir = (dir: string) => {
  fs.mkdirSync(dir, { recursive: true });
  return dir;
};

export const run = (
  cwd: string,
  cmd: string,
  { timeoutMs = 10 * 60 * 1000, env, allowFailure = false }: RunOptions = {},
): RunResult => {
  try {
    const output = execSync(`${cmd} 2>&1`, {
      cwd,
      encoding: 'utf8',
      timeout: timeoutMs,
      maxBuffer: MAX_BUFFER,
      env: childEnv(env),
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
    });
    return { ok: true, output: stripAnsi(output) };
  } catch (e) {
    const err = e as { stdout?: string; stderr?: string; message: string };
    const output = stripAnsi(
      `${err.stdout ?? ''}${err.stderr ?? ''}` || err.message,
    );
    if (allowFailure) {
      return { ok: false, output };
    }
    throw new Error(
      `Command failed: ${cmd}\n  cwd: ${cwd}\n${err.message.split('\n')[0]}\n--- output ---\n${tail(output)}`,
    );
  }
};

export const commandExists = (cmd: string): boolean => {
  const res = spawnSync(cmd, {
    shell: true,
    stdio: 'ignore',
    timeout: 30000,
    windowsHide: true,
  });
  return res.status === 0;
};

export const npmInstall = (dir: string, timeoutMs = 15 * 60 * 1000) =>
  run(dir, 'npm install --no-audit --no-fund --loglevel=error', {
    timeoutMs,
  });

const killTree = (pid: number) => {
  if (IS_WINDOWS) {
    spawnSync('taskkill', ['/pid', String(pid), '/T', '/F'], {
      stdio: 'ignore',
      windowsHide: true,
    });
    return;
  }
  try {
    process.kill(-pid, 'SIGTERM');
  } catch {}
};

const forceKillTree = (pid: number) => {
  if (IS_WINDOWS) {
    killTree(pid);
    return;
  }
  try {
    process.kill(-pid, 'SIGKILL');
  } catch {}
};

export const startServer = (
  cwd: string,
  cmd: string,
  env: NodeJS.ProcessEnv = {},
): ServerHandle => {
  let output = '';
  let hasExited = false;
  const child = spawn(cmd, {
    cwd,
    shell: true,
    detached: !IS_WINDOWS,
    windowsHide: true,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: childEnv(env),
  });
  const append = (chunk: Buffer) => {
    output = tail(output + stripAnsi(chunk.toString()), 64 * 1024);
  };
  child.stdout?.on('data', append);
  child.stderr?.on('data', append);
  const exitPromise = new Promise<void>((resolve) => {
    child.on('exit', () => {
      hasExited = true;
      resolve();
    });
    child.on('error', (err) => {
      output += `\n[spawn error] ${err.message}`;
      hasExited = true;
      resolve();
    });
  });

  const stop = async () => {
    if (child.pid === undefined) {
      return;
    }
    killTree(child.pid);
    const timedOut = await Promise.race([
      exitPromise.then(() => false),
      sleep(10000).then(() => true),
    ]);
    if (timedOut) {
      forceKillTree(child.pid);
      await Promise.race([exitPromise, sleep(5000)]);
    }
    child.stdout?.destroy();
    child.stderr?.destroy();
  };

  return {
    pid: child.pid,
    output: () => output,
    exited: () => hasExited,
    stop,
  };
};

export const waitForHttp = async (
  url: string,
  {
    timeoutMs = 120000,
    expectedStatus = 200,
    bodyContains,
    server,
  }: WaitForHttpOptions = {},
): Promise<string> => {
  const deadline = Date.now() + timeoutMs;
  let lastError = '';
  while (Date.now() < deadline) {
    if (server?.exited()) {
      throw new Error(
        `Server exited before ${url} became available\n--- server output ---\n${tail(server.output())}`,
      );
    }
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
      const body = await res.text();
      if (
        res.status === expectedStatus &&
        (!bodyContains || body.includes(bodyContains))
      ) {
        return body;
      }
      lastError = `status ${res.status}, body: ${body.slice(0, 300)}`;
    } catch (e) {
      lastError = (e as Error).message;
    }
    await sleep(1000);
  }
  throw new Error(
    `Timed out after ${timeoutMs}ms waiting for ${url} (${lastError})${
      server ? `\n--- server output ---\n${tail(server.output())}` : ''
    }`,
  );
};

const isPortFree = (port: number) =>
  new Promise<boolean>((resolve) => {
    const srv = net.createServer();
    srv.once('error', () => resolve(false));
    srv.once('listening', () => srv.close(() => resolve(true)));
    srv.listen(port);
  });

export const waitForPortClosed = async (
  port: number,
  { timeoutMs = 30000 }: { timeoutMs?: number } = {},
) => {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await isPortFree(port)) {
      return;
    }
    await sleep(500);
  }
  throw new Error(`Port ${port} still in use after ${timeoutMs}ms`);
};

export const venvPython = (dir: string) =>
  IS_WINDOWS
    ? path.join(dir, '.venv', 'Scripts', 'python.exe')
    : path.join(dir, '.venv', 'bin', 'python');

export const venvPip = (dir: string) =>
  IS_WINDOWS
    ? path.join(dir, '.venv', 'Scripts', 'pip.exe')
    : path.join(dir, '.venv', 'bin', 'pip');

export const quote = (p: string) => `"${p}"`;

export const findPython = (): string | null => {
  const override = process.env.LIVE_MATRIX_PYTHON;
  const candidates = override
    ? [override]
    : IS_WINDOWS
      ? ['python', 'py -3', 'python3']
      : ['python3', 'python'];
  for (const candidate of candidates) {
    const res = spawnSync(`${candidate} --version`, {
      shell: true,
      encoding: 'utf8',
      timeout: 30000,
      windowsHide: true,
    });
    if (res.status === 0 && /Python 3\./.test(`${res.stdout}${res.stderr}`)) {
      return candidate;
    }
  }
  return null;
};
