import chalk from 'chalk';
import { describe, expect, it, jest } from '@jest/globals';
import Logger from '../../src/logger';

jest.mock('chalk', () => ({
    blue: (text: string) => `[blue]${text}[/blue]`,
    red: (text: string) => `[red]${text}[/red]`,
}));

describe('Logger', () => {
    it('should match the snapshot for info log', () => {
        const logger = Logger.getInstance({ showTimestamp: false });
        const logSpy = jest.spyOn(console, 'log'); // Removed mockImplementation
        logger.info('Test info message');
        expect(logSpy).toHaveBeenCalledWith(chalk.blue('[INFO]'), 'Test info message');
        logSpy.mockRestore(); // Restore the original implementation after the test
    });

    it('should match the snapshot for error log', () => {
        const logger = Logger.getInstance({ showTimestamp: false });
        const logSpy = jest.spyOn(console, 'log'); // Removed mockImplementation
        logger.error('Test error message');
        expect(logSpy).toHaveBeenCalledWith(chalk.red('[ERROR]'), 'Test error message');
        logSpy.mockRestore(); // Restore the original implementation after the test
    });
});
