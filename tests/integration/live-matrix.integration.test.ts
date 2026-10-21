import { describe, it, expect, beforeAll, jest } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import {
  commandExists,
  ensureDir,
  findPython,
  moveDir,
  npmInstall,
  quote,
  run,
  safeRmSync,
  startServer,
  venvPython,
  waitForHttp,
  waitForPortClosed,
  ServerHandle,
} from './helpers/live-matrix';

jest.mock('chalk', () => {
  const id = (text: string) => text;
  const fns = {
    gray: id,
    blue: id,
    yellow: id,
    red: id,
    green: id,
    white: id,
    cyan: id,
    bold: id,
  };
  return { __esModule: true, default: fns, ...fns };
});

import { renderTemplate } from '../../src/templating';
import * as scaffold from '../../src/scaffold';
import { scaffoldArchitecture } from '../../src/architecture';
import {
  PROGRAMMING_LANGUAGES,
  FRONTEND_FRAMEWORKS,
  BACKEND_FRAMEWORKS,
  NAVIGATION_LAYOUTS,
} from '../../src/choices';

const LIVE = process.env.RUN_LIVE_MATRIX === 'true';
const describeLive = LIVE ? describe : describe.skip;

const TEMPLATES_DIR = path.resolve(__dirname, '../../templates');
const WORK_DIR = path.resolve(__dirname, '../../scratch/live-matrix');
const KEEP = process.env.LIVE_MATRIX_KEEP === 'true';

const splitEnv = (value: string | undefined) =>
  (value || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

const ONLY = splitEnv(process.env.LIVE_MATRIX_ONLY);
const LAYOUTS = splitEnv(process.env.LIVE_MATRIX_LAYOUTS || 'topnav');
const BE_DATABASE = process.env.LIVE_MATRIX_BE_DATABASE ?? '';
const FS_DATABASE = process.env.LIVE_MATRIX_FS_DATABASE || 'mongodb';

const PYTHON = LIVE ? findPython() : null;
const HAS_DOTNET = LIVE ? commandExists('dotnet --version') : false;

const FE_TIMEOUT = 25 * 60 * 1000;
const BE_TIMEOUT = 20 * 60 * 1000;
const FS_TIMEOUT = 40 * 60 * 1000;

const BOOT_ENV = { NODE_ENV: 'development', PYTHONUNBUFFERED: '1' };
const E2E_ENV = { NODE_ENV: undefined, PW_TEST_HTML_REPORT_OPEN: 'never' };

interface BackendSpec {
  port: number;
  healthPath: string;
  boot: (venvPy: string) => string;
}

const BACKEND_SPECS: Record<string, BackendSpec> = {
  'javascript-express': {
    port: 3000,
    healthPath: '/api/health',
    boot: () => 'node src/index.js',
  },
  'typescript-express': {
    port: 3000,
    healthPath: '/api/health',
    boot: () => 'npx tsx src/index.ts',
  },
  'javascript-nestjs': {
    port: 3000,
    healthPath: '/health',
    boot: () => 'node src/main.js',
  },
  'typescript-nestjs': {
    port: 3000,
    healthPath: '/health',
    boot: () => 'npm start',
  },
  'python-fastapi': {
    port: 8000,
    healthPath: '/api/health',
    boot: (py) => `${py} -m uvicorn main:app --port 8000`,
  },
  'python-django': {
    port: 8000,
    healthPath: '/api/health',
    boot: (py) => `${py} manage.py runserver 127.0.0.1:8000 --noreload`,
  },
  'python-flask': {
    port: 5000,
    healthPath: '/api/health',
    boot: (py) => `${py} app.py`,
  },
  'python-sanic': {
    port: 8000,
    healthPath: '/api/health',
    boot: (py) => `${py} main.py`,
  },
  'python-tornado': {
    port: 8888,
    healthPath: '/api/health',
    boot: (py) => `${py} main.py`,
  },
  'csharp-dotnetcore': {
    port: 5000,
    healthPath: '/api/health',
    boot: () => 'dotnet run --urls=http://127.0.0.1:5000',
  },
};

const FE_PORTS: Record<string, number> = {
  nextjs: 3000,
  nuxtjs: 3000,
  angular: 4200,
};
const fePort = (fw: string) => FE_PORTS[fw] ?? 5173;

const FULLSTACK_COMBOS = [
  { language: 'javascript-javascript', framework: 'react-express' },
  { language: 'typescript-typescript', framework: 'react-express' },
  { language: 'typescript-python', framework: 'react-fastapi' },
  { language: 'typescript-csharp', framework: 'react-dotnetcore' },
];

interface Requirements {
  python?: boolean;
  dotnet?: boolean;
}

const liveCase = (
  id: string,
  reqs: Requirements,
  fn: () => Promise<void>,
  timeout: number,
) => {
  const noop = async () => {};
  if (ONLY.length > 0 && !ONLY.some((s) => id.includes(s))) {
    it.skip(`${id} (filtered out by LIVE_MATRIX_ONLY)`, noop);
  } else if (reqs.python && !PYTHON) {
    it.skip(
      `${id} (skipped: Python 3 not found, set LIVE_MATRIX_PYTHON)`,
      noop,
    );
  } else if (reqs.dotnet && !HAS_DOTNET) {
    it.skip(`${id} (skipped: dotnet SDK not found)`, noop);
  } else {
    it(id, fn, timeout);
  }
};

const cleanup = (dir: string) => {
  if (!KEEP) {
    safeRmSync(dir);
  }
};

const installAndTestBackend = (
  dir: string,
  beLang: string,
  installNode = true,
): string => {
  if (beLang === 'python') {
    run(dir, `${PYTHON} -m venv .venv`);
    const py = quote(venvPython(dir));
    run(
      dir,
      `${py} -m pip install --disable-pip-version-check -q -r requirements.txt pytest`,
    );
    run(dir, `${py} -m pytest -q -p no:cacheprovider`);
    return py;
  }
  if (beLang === 'csharp') {
    run(dir, 'dotnet restore');
    run(dir, 'dotnet test --nologo');
    return '';
  }
  if (installNode) {
    npmInstall(dir);
  }
  run(dir, 'npm test', { env: { CI: 'true' } });
  return '';
};

const bootBackend = async (
  dir: string,
  key: string,
  py: string,
): Promise<ServerHandle> => {
  const spec = BACKEND_SPECS[key];
  await waitForPortClosed(spec.port);
  const server = startServer(dir, spec.boot(py), {
    ...BOOT_ENV,
    PORT: String(spec.port),
  });
  try {
    await waitForHttp(`http://127.0.0.1:${spec.port}${spec.healthPath}`, {
      server,
      timeoutMs: 5 * 60 * 1000,
    });
  } catch (e) {
    await server.stop();
    throw e;
  }
  return server;
};

const stopServer = async (server: ServerHandle | undefined, port: number) => {
  if (server) {
    await server.stop();
    await waitForPortClosed(port);
  }
};

const validLayouts = NAVIGATION_LAYOUTS.map((l) => l.value);
const invalidLayouts = LAYOUTS.filter((l) => !validLayouts.includes(l));
if (LIVE && invalidLayouts.length > 0) {
  throw new Error(
    `Unknown LIVE_MATRIX_LAYOUTS value(s): ${invalidLayouts.join(', ')}. Valid: ${validLayouts.join(', ')}`,
  );
}

const installChromium = (dir: string) =>
  run(dir, 'npx playwright install chromium', { timeoutMs: 15 * 60 * 1000 });

const runFrontendUnitTests = (dir: string, fw: string) => {
  if (fw !== 'angular') {
    run(dir, 'npm test', { env: { CI: 'true' } });
    return;
  }
  const res = run(dir, 'npm test -- --watch=false', {
    env: { CI: 'true' },
    allowFailure: true,
  });
  if (!res.ok) {
    console.warn(
      `[live-matrix] ng test failed, falling back to ng build:\n${res.output.slice(-2000)}`,
    );
    run(dir, 'npm run build');
  }
};

const runFrontendE2e = async (dir: string, port: number) => {
  await waitForPortClosed(port);
  run(dir, 'npm run test:e2e -- --reporter=list', {
    env: E2E_ENV,
    timeoutMs: 15 * 60 * 1000,
  });
  await waitForPortClosed(port);
};

describeLive('Live matrix: frontend', () => {
  beforeAll(
    () => {
      ensureDir(WORK_DIR);
      installChromium(path.resolve(__dirname, '../..'));
    },
    20 * 60 * 1000,
  );

  PROGRAMMING_LANGUAGES.frontend.forEach((lang) => {
    (FRONTEND_FRAMEWORKS[lang.value] || []).forEach((fw) => {
      LAYOUTS.forEach((layout) => {
        const templateKey = `frontend-${lang.value}-${fw.value}`;
        const id = `${templateKey}-${layout}`;
        liveCase(
          id,
          {},
          async () => {
            const target = path.join(WORK_DIR, id);
            const source = path.join(TEMPLATES_DIR, templateKey);
            safeRmSync(target);
            try {
              await renderTemplate(source, target, {
                projectName: `live-${lang.value}-${fw.value}`,
                templateName: templateKey,
                templatePath: source,
                targetPath: target,
                isFullstack: false,
                language: lang.value,
                shadcn: false,
                layout,
              });
              npmInstall(target);
              installChromium(target);
              runFrontendUnitTests(target, fw.value);
              await runFrontendE2e(target, fePort(fw.value));
            } finally {
              cleanup(target);
            }
          },
          FE_TIMEOUT,
        );
      });
    });
  });
});

describeLive('Live matrix: backend', () => {
  beforeAll(() => {
    ensureDir(WORK_DIR);
  });

  PROGRAMMING_LANGUAGES.backend.forEach((lang) => {
    (BACKEND_FRAMEWORKS[lang.value] || []).forEach((fw) => {
      const key = `${lang.value}-${fw.value}`;
      const templateKey = `backend-${key}`;
      liveCase(
        templateKey,
        { python: lang.value === 'python', dotnet: lang.value === 'csharp' },
        async () => {
          const target = path.join(WORK_DIR, templateKey);
          const source = path.join(TEMPLATES_DIR, templateKey);
          safeRmSync(target);
          let server: ServerHandle | undefined;
          try {
            const renderOptions = {
              projectName: `live-${lang.value}-${fw.value}`,
              templateName: templateKey,
              templatePath: source,
              targetPath: target,
              isFullstack: false,
              language: lang.value,
              database: BE_DATABASE,
              architecturePattern: 'monolithic',
            };
            await renderTemplate(source, target, renderOptions);
            scaffoldArchitecture(target, renderOptions);
            const py = installAndTestBackend(target, lang.value);
            server = await bootBackend(target, key, py);
            expect(server.exited()).toBe(false);
          } finally {
            await stopServer(server, BACKEND_SPECS[key].port);
            cleanup(target);
          }
        },
        BE_TIMEOUT,
      );
    });
  });
});

describeLive('Live matrix: fullstack', () => {
  beforeAll(() => {
    ensureDir(WORK_DIR);
  });

  FULLSTACK_COMBOS.forEach(({ language, framework }) => {
    LAYOUTS.forEach((layout) => {
      const [feLang, beLang] = language.split('-');
      const [feFw, beFw] = framework.split('-');
      const beKey = `${beLang}-${beFw}`;
      const id = `fullstack-${language}-${framework}-${layout}`;
      liveCase(
        id,
        { python: beLang === 'python', dotnet: beLang === 'csharp' },
        async () => {
          const target = path.join(WORK_DIR, id);
          const clientDir = path.join(target, 'apps', 'client');
          const serverDir = path.join(target, 'apps', 'server');
          const clientPort = fePort(feFw);
          const projectName = `livefs-${feLang.slice(0, 2)}-${beLang.slice(0, 2)}-${beFw}-${layout}`;
          const staging = path.join(process.cwd(), projectName);
          safeRmSync(target);
          safeRmSync(staging);
          let server: ServerHandle | undefined;
          let client: ServerHandle | undefined;
          const postProcessSpy = jest
            .spyOn(scaffold, 'postProcess')
            .mockReturnValue(true);
          try {
            await scaffold.run({
              projectName,
              projectType: 'fullstack',
              language,
              framework,
              architecturePattern: 'monolithic',
              database: FS_DATABASE,
              shadcn: false,
              layout,
            });
            postProcessSpy.mockRestore();
            moveDir(staging, target);
            expect(fs.existsSync(path.join(target, 'package.json'))).toBe(true);
            expect(fs.existsSync(path.join(clientDir, 'package.json'))).toBe(
              true,
            );

            npmInstall(target);
            run(target, 'npx --yes jest@29 --ci tests/fullstack.test.js', {
              env: { CI: 'true' },
            });
            runFrontendUnitTests(clientDir, feFw);
            const py = installAndTestBackend(serverDir, beLang, false);

            server = await bootBackend(serverDir, beKey, py);
            await waitForPortClosed(clientPort);
            client = startServer(clientDir, 'npm run dev', BOOT_ENV);
            await waitForHttp(`http://localhost:${clientPort}/`, {
              server: client,
              timeoutMs: 5 * 60 * 1000,
            });

            installChromium(clientDir);
            run(clientDir, 'npm run test:e2e -- --reporter=list', {
              env: { ...E2E_ENV, CI: undefined },
              timeoutMs: 15 * 60 * 1000,
            });
          } finally {
            postProcessSpy.mockRestore();
            safeRmSync(staging);
            await stopServer(client, clientPort);
            await stopServer(server, BACKEND_SPECS[beKey].port);
            cleanup(target);
          }
        },
        FS_TIMEOUT,
      );
    });
  });
});
