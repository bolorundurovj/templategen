import request from 'supertest';
import app from '../src/index';
<% if (database !== 'mongodb') { %>import * as ItemStore from '../src/models/item';
<% } %>

describe('Items API', () => {
<% if (database !== 'mongodb') { %>
  beforeEach(() => {
    ItemStore.reset();
  });
<% } %>

  describe('POST /api/items', () => {
    it('should create a new item', async () => {
      const res = await request(app)
        .post('/api/items')
        .send({ title: 'Test Item', description: 'A test item' });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('title', 'Test Item');
      expect(res.body).toHaveProperty('description', 'A test item');
      expect(res.body).toHaveProperty('completed', false);
    });

    it('should return 400 when title is missing', async () => {
      const res = await request(app)
        .post('/api/items')
        .send({ description: 'No title' });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('GET /api/items', () => {
    it('should return an array of items', async () => {
      await request(app)
        .post('/api/items')
        .send({ title: 'Item 1' });
      const res = await request(app).get('/api/items');
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('GET /api/items/:id', () => {
    it('should return a single item', async () => {
      const created = await request(app)
        .post('/api/items')
        .send({ title: 'Find Me' });
      const id = created.body.id || created.body._id;
      const res = await request(app).get(`/api/items/${id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('title', 'Find Me');
    });

    it('should return 404 for non-existent item', async () => {
      const res = await request(app).get('/api/items/nonexistent');
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('PUT /api/items/:id', () => {
    it('should update an existing item', async () => {
      const created = await request(app)
        .post('/api/items')
        .send({ title: 'Update Me' });
      const id = created.body.id || created.body._id;
      const res = await request(app)
        .put(`/api/items/${id}`)
        .send({ title: 'Updated', completed: true });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('title', 'Updated');
      expect(res.body).toHaveProperty('completed', true);
    });
  });

  describe('DELETE /api/items/:id', () => {
    it('should delete an existing item', async () => {
      const created = await request(app)
        .post('/api/items')
        .send({ title: 'Delete Me' });
      const id = created.body.id || created.body._id;
      const res = await request(app).delete(`/api/items/${id}`);
      expect(res.statusCode).toEqual(204);
    });

    it('should return 404 for non-existent item', async () => {
      const res = await request(app).delete('/api/items/nonexistent');
      expect(res.statusCode).toEqual(404);
    });
  });
});
