import {
  describe,
  it,
  expect,
  jest,
  beforeEach,
  afterEach,
} from '@jest/globals';

jest.mock('chalk', () => ({
  __esModule: true,
  default: {
    gray: (text: string) => `[gray]${text}[/gray]`,
    blue: (text: string) => `[blue]${text}[/blue]`,
    yellow: (text: string) => `[yellow]${text}[/yellow]`,
    red: (text: string) => `[red]${text}[/red]`,
    green: (text: string) => `[green]${text}[/green]`,
    white: (text: string) => `[white]${text}[/white]`,
  },
  gray: (text: string) => `[gray]${text}[/gray]`,
  blue: (text: string) => `[blue]${text}[/blue]`,
  yellow: (text: string) => `[yellow]${text}[/yellow]`,
  red: (text: string) => `[red]${text}[/red]`,
  green: (text: string) => `[green]${text}[/green]`,
  white: (text: string) => `[white]${text}[/white]`,
}));

import Logger, { logger } from '../../src/logger';

describe('Logger Unit Tests', () => {
  let consoleSpy: any;
  let exitSpy: any;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    exitSpy = jest.spyOn(process, 'exit').mockImplementation((() => {}) as any);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    exitSpy.mockRestore();
  });

  it('returns singleton instance with getInstance', () => {
    const instance1 = Logger.getInstance();
    const instance2 = Logger.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('updates showTimestamp option on subsequent getInstance calls', () => {
    const loggerInstance = Logger.getInstance({ showTimestamp: false });
    loggerInstance.info('test message without timestamp');

    expect(consoleSpy).toHaveBeenCalled();
    const callArgWithoutTimestamp = consoleSpy.mock.calls[0][0];
    expect(callArgWithoutTimestamp).not.toMatch(/\[\d{4}-\d{2}-\d{2}T/);

    Logger.getInstance({ showTimestamp: true });
    loggerInstance.info('test message with timestamp');
    const callArgWithTimestamp = consoleSpy.mock.calls[1][0];
    expect(callArgWithTimestamp).toMatch(/\[\d{4}-\d{2}-\d{2}T/);
  });

  it('logs debug messages', () => {
    logger.debug('debug message', { key: 'value' });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[DEBUG]'),
      'debug message',
      { key: 'value' },
    );
  });

  it('logs info messages', () => {
    logger.info('info message');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[INFO]'),
      'info message',
    );
  });

  it('logs warn messages', () => {
    logger.warn('warn message');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[WARN]'),
      'warn message',
    );
  });

  it('logs error messages', () => {
    logger.error('error message');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR]'),
      'error message',
    );
  });

  it('logs success messages', () => {
    logger.success('success message');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[SUCCESS]'),
      'success message',
    );
  });

  it('handles unrecognized log level by falling back to default', () => {
    const instance = Logger.getInstance();
    (instance as any).log('custom_level', 'custom log message');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[CUSTOM_LEVEL]'),
      'custom log message',
    );
  });

  it('logs error and exits process in logErrorAndExit with default code 1', () => {
    logger.logErrorAndExit('Fatal error occurred');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR]'),
      'Fatal error occurred',
    );
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it('logs error and exits process in logErrorAndExit with custom exit code', () => {
    logger.logErrorAndExit('Fatal error occurred with code 2', 2);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR]'),
      'Fatal error occurred with code 2',
    );
    expect(exitSpy).toHaveBeenCalledWith(2);
  });
});
