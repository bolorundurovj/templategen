import chalk from 'chalk';

export interface LoggerOptions {
    /** Whether to prepend a timestamp to each log message */
    showTimestamp?: boolean;
}

export default class Logger {
    private static instance: Logger;
    private showTimestamp: boolean;

    // Private constructor to prevent direct instantiation.
    private constructor(options: LoggerOptions = {}) {
        this.showTimestamp = options.showTimestamp ?? false;
    }

    /**
     * Returns the singleton instance of Logger.
     * The options are applied only on the first call.
     * @param options Logger configuration options.
     */
    public static getInstance(options: LoggerOptions = {}): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger(options);
        }
        return Logger.instance;
    }

    public debug(...args: any[]): void {
        this.log('debug', ...args);
    }

    public info(...args: any[]): void {
        this.log('info', ...args);
    }

    public warn(...args: any[]): void {
        this.log('warn', ...args);
    }

    public error(...args: any[]): void {
        this.log('error', ...args);
    }

    public success(...args: any[]): void {
        this.log('success', ...args);
    }

    public logErrorAndExit(message: string, exitCode = 1): void {
        this.error(message);
        process.exit(exitCode);
    }

    // Returns an ISO formatted timestamp.
    private getTimestamp(): string {
        return new Date().toISOString();
    }

    /**
     * Logs a message with a colored level tag.
     * @param level - The log level (e.g. 'debug', 'info', 'warn', 'error').
     * @param args - One or more values to log.
     */
    private log(level: string, ...args: any[]): void {
        let colorFn: (text: string) => string;

        switch (level) {
            case 'debug':
                colorFn = chalk.gray;
                break;
            case 'info':
                colorFn = chalk.blue;
                break;
            case 'warn':
                colorFn = chalk.yellow;
                break;
            case 'error':
                colorFn = chalk.red;
                break;
            case 'success':
                colorFn = chalk.green;
                break;
            default:
                colorFn = chalk.white;
        }

        const timestamp = this.showTimestamp ? `[${this.getTimestamp()}] ` : '';
        const levelTag = colorFn(`[${level.toUpperCase()}]`);
        console.log(`${timestamp}${levelTag}`, ...args);
    }


}


export const logger = Logger.getInstance({showTimestamp: true});
