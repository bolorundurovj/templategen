const { Catch, HttpException, HttpStatus } = require('@nestjs/common');
const { AppLoggerService } = require('../logger/app-logger.service');

class HttpExceptionFilter {
  constructor() {
    this.logger = new AppLoggerService();
  }

  catch(exception, host) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    this.logger.error(
      `${request.method} ${request.url} [${status}] - ${message}`,
      exception instanceof Error ? exception.stack : undefined,
      'HttpExceptionFilter',
    );

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

Catch()(HttpExceptionFilter);

module.exports = { HttpExceptionFilter };
