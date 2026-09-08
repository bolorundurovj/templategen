import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return welcome message', () => {
      const res = appController.getHello();
      expect(res).toHaveProperty('message');
      expect(res.message).toContain('NestJS API');
    });
  });

  describe('health', () => {
    it('should return health status ok', () => {
      const res = appController.getHealth();
      expect(res).toHaveProperty('status', 'ok');
      expect(res).toHaveProperty('timestamp');
    });
  });
});
