const fs = require('fs');
const path = require('path');
const { Injectable } = require('@nestjs/common');

class AppLoggerService {
  constructor() {
    this.logToFile =
      process.env.LOG_TO_FILE === 'true' || Boolean(process.env.LOG_FILE);
    this.logFilePath =
      process.env.LOG_FILE || path.join(process.cwd(), 'logs', 'app.log');

    if (this.logToFile) {
      const dir = path.dirname(this.logFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  write(level, message, context) {
    const timestamp = new Date().toISOString();
    const ctx = context ? ` [${context}]` : '';
    const line = `[${timestamp}] [${level.toUpperCase()}]${ctx} ${message}\n`;

    if (level === 'error') {
      console.error(line.trimEnd());
    } else if (level === 'warn') {
      console.warn(line.trimEnd());
    } else {
      console.log(line.trimEnd());
    }

    if (this.logToFile) {
      try {
        fs.appendFileSync(this.logFilePath, line);
      } catch {
        // Suppress file write error
      }
    }
  }

  log(message, context) {
    this.write('info', message, context);
  }

  error(message, trace, context) {
    const msg = trace ? `${message} - ${trace}` : message;
    this.write('error', msg, context);
  }

  warn(message, context) {
    this.write('warn', message, context);
  }

  debug(message, context) {
    this.write('debug', message, context);
  }

  verbose(message, context) {
    this.write('verbose', message, context);
  }
}

Injectable()(AppLoggerService);

module.exports = { AppLoggerService };
