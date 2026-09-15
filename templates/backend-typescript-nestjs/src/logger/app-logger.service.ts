import { Injectable, LoggerService } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppLoggerService implements LoggerService {
  private logToFile: boolean;
  private logFilePath: string;

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

  private write(level: string, message: any, context?: string): void {
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

  log(message: any, context?: string): void {
    this.write('info', message, context);
  }

  error(message: any, trace?: string, context?: string): void {
    const msg = trace ? `${message} - ${trace}` : message;
    this.write('error', msg, context);
  }

  warn(message: any, context?: string): void {
    this.write('warn', message, context);
  }

  debug?(message: any, context?: string): void {
    this.write('debug', message, context);
  }

  verbose?(message: any, context?: string): void {
    this.write('verbose', message, context);
  }
}
