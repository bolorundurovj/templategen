import request from 'supertest';
import app from '../src/index';

describe('Middleware', () => {
  describe('notFound', () => {
    it('should return 404 JSON for unknown routes', async () => {
      const res = await request(app).get('/unknown/path');
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('error');
      expect(res.body.error).toHaveProperty('message');
      expect(res.body.error).toHaveProperty('statusCode', 404);
    });
  });

  describe('requestLogger', () => {
    it('should not interfere with normal request flow', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message');
    });
  });
});
