const { Controller, Dependencies, Get } = require('@nestjs/common');
const { AppService } = require('./app.service');

class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  getHello() {
    return this.appService.getHello();
  }

  getHealth() {
    return this.appService.getHealth();
  }
}

const desc = (prop) =>
  Object.getOwnPropertyDescriptor(AppController.prototype, prop);

Controller()(AppController);
Dependencies(AppService)(AppController);
Get()(AppController.prototype, 'getHello', desc('getHello'));
Get('health')(AppController.prototype, 'getHealth', desc('getHealth'));

module.exports = { AppController };
