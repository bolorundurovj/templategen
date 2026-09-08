import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
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
//# sourceMappingURL=app.service.js.map