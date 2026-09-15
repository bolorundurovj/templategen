const { AppLoggerService } = require('../src/logger/app-logger.service');

describe('AppLoggerService', () => {
  let service;
  let consoleSpy;
  let consoleWarnSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    service = new AppLoggerService();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  it('logs info messages', () => {
    service.log('Test message', 'TestContext');
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[INFO] [TestContext] Test message'),
    );
  });

  it('logs warn messages', () => {
    service.warn('Warning message', 'TestContext');
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('[WARN] [TestContext] Warning message'),
    );
  });

  it('logs error messages', () => {
    service.error('Error message', 'Error trace', 'TestContext');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] [TestContext] Error message - Error trace'),
    );
  });
});
