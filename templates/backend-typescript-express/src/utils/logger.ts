import fs from 'fs';
import path from 'path';

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const logToFile =
  process.env.LOG_TO_FILE === 'true' || Boolean(process.env.LOG_FILE);
const logFilePath =
  process.env.LOG_FILE || path.join(process.cwd(), 'logs', 'app.log');

if (logToFile) {
  const dir = path.dirname(logFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeLog(level: LogLevel, message: string, meta?: unknown): void {
  const timestamp = new Date().toISOString();
  const metaStr = meta ? ` ${JSON.stringify(meta)}` : '';
  const line = `[${timestamp}] [${level.toUpperCase()}] ${message}${metaStr}\n`;

  if (level === 'error') {
    console.error(line.trimEnd());
  } else if (level === 'warn') {
    console.warn(line.trimEnd());
  } else {
    console.log(line.trimEnd());
  }

  if (logToFile) {
    try {
      fs.appendFileSync(logFilePath, line);
    } catch {
      // Avoid crashing application on logging failure
    }
  }
}

export const logger = {
  info: (message: string, meta?: unknown): void => writeLog('info', message, meta),
  warn: (message: string, meta?: unknown): void => writeLog('warn', message, meta),
  error: (message: string, meta?: unknown): void => writeLog('error', message, meta),
  debug: (message: string, meta?: unknown): void => writeLog('debug', message, meta),
};
