const { Test } = require('@nestjs/testing');
const { AppController } = require('../src/app.controller');
const { AppService } = require('../src/app.service');

describe('AppController', () => {
  let appController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get(AppController);
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
