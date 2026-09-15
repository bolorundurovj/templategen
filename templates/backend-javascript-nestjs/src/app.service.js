const { Injectable } = require('@nestjs/common');

class AppService {
  getHello() {
    return { message: 'Welcome to <%= projectName %> NestJS API' };
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}

Injectable()(AppService);

module.exports = { AppService };
