const fs = require('fs');
const path = require('path');

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

function writeLog(level, message, meta) {
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

const logger = {
  info: (message, meta) => writeLog('info', message, meta),
  warn: (message, meta) => writeLog('warn', message, meta),
  error: (message, meta) => writeLog('error', message, meta),
  debug: (message, meta) => writeLog('debug', message, meta),
};

module.exports = { logger };
