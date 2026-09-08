import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    @Get()
    getHello() {
        return this.appService.getHello();
    }
    @Get('health')
    getHealth() {
        return this.appService.getHealth();
    }
}
//# sourceMappingURL=app.controller.js.map