import request from 'supertest';
import app from '../src/index';

describe('API Routes', () => {
  describe('GET /api/info', () => {
    it('should return application info', async () => {
      const res = await request(app).get('/api/info');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('name');
      expect(res.body).toHaveProperty('version');
      expect(res.body).toHaveProperty('environment');
    });
  });
});
