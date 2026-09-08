import request from 'supertest';
import app from '../src/index';

describe('TypeScript API Endpoints', () => {
  it('should return a welcome message on the base route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toContain('Welcome to');
  });

  it('should return health status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('timestamp');
  });

  it('should return 404 on nonexistent route', async () => {
    const res = await request(app).get('/api/nonexistent');
    expect(res.statusCode).toEqual(404);
  });
});
