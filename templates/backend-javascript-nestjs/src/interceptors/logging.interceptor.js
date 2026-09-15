const { Injectable } = require('@nestjs/common');
const { tap } = require('rxjs');
const { AppLoggerService } = require('../logger/app-logger.service');

class LoggingInterceptor {
  constructor() {
    this.logger = new AppLoggerService();
  }

  intercept(context, next) {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const duration = Date.now() - now;
        this.logger.log(
          `${method} ${url} ${response.statusCode} - ${duration}ms`,
          'HTTP',
        );
      }),
    );
  }
}

Injectable()(LoggingInterceptor);

module.exports = { LoggingInterceptor };
