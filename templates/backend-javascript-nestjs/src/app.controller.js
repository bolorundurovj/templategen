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

module.exports = { AppController };
