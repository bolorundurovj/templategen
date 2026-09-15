import { AppService } from '../src/app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  describe('getHello', () => {
    it('should return a message object', () => {
      const result = service.getHello();
      expect(result).toHaveProperty('message');
      expect(result.message).toContain('NestJS API');
    });
  });

  describe('getHealth', () => {
    it('should return status ok with timestamp', () => {
      const result = service.getHealth();
      expect(result).toHaveProperty('status', 'ok');
      expect(result).toHaveProperty('timestamp');
      expect(new Date(result.timestamp).getTime()).not.toBeNaN();
    });
  });
});
