const { ItemsService } = require('../src/items/items.service');

describe('ItemsService', () => {
  let service;

  beforeEach(() => {
    service = new ItemsService();
  });

  describe('create', () => {
    it('should create an item', () => {
      const item = service.create({ title: 'Test' });
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('title', 'Test');
      expect(item).toHaveProperty('completed', false);
    });
  });

  describe('findAll', () => {
    it('should return an array', () => {
      service.create({ title: 'Item 1' });
      const items = service.findAll();
      expect(Array.isArray(items)).toBe(true);
      expect(items.length).toBe(1);
    });
  });

  describe('findOne', () => {
    it('should return a single item', () => {
      const created = service.create({ title: 'Find Me' });
      const found = service.findOne(created.id);
      expect(found).toHaveProperty('title', 'Find Me');
    });

    it('should throw for non-existent id', () => {
      expect(() => service.findOne('999')).toThrow();
    });
  });

  describe('update', () => {
    it('should update an item', () => {
      const created = service.create({ title: 'Original' });
      const updated = service.update(created.id, { title: 'Updated', completed: true });
      expect(updated).toHaveProperty('title', 'Updated');
      expect(updated).toHaveProperty('completed', true);
    });
  });

  describe('remove', () => {
    it('should remove an item', () => {
      const created = service.create({ title: 'Delete Me' });
      expect(() => service.remove(created.id)).not.toThrow();
      expect(() => service.findOne(created.id)).toThrow();
    });

    it('should throw for non-existent id', () => {
      expect(() => service.remove('999')).toThrow();
    });
  });
});
