import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Welcome to <%= projectName %> NestJS API' };
  }

  getHealth(): { status: string; timestamp: string } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
