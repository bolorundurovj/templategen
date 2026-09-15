const { logger } = require('../src/utils/logger');

describe('Logger', () => {
  let consoleSpy;
  let consoleWarnSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  it('logs info messages to console', () => {
    logger.info('Test info message');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[INFO] Test info message'),
    );
  });

  it('logs warn messages to console', () => {
    logger.warn('Test warn message');
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('[WARN] Test warn message'),
    );
  });

  it('logs error messages to console', () => {
    logger.error('Test error message');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] Test error message'),
    );
  });

  it('logs debug messages to console', () => {
    logger.debug('Test debug message');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[DEBUG] Test debug message'),
    );
  });
});
