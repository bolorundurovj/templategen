import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from '../src/items/items.controller';
import { ItemsService } from '../src/items/items.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an item', () => {
      const item = controller.create({ title: 'Test' });
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('title', 'Test');
      expect(item).toHaveProperty('completed', false);
    });
  });

  describe('findAll', () => {
    it('should return an array', () => {
      controller.create({ title: 'Item 1' });
      const items = controller.findAll();
      expect(Array.isArray(items)).toBe(true);
      expect(items.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('findOne', () => {
    it('should return a single item', () => {
      const created = controller.create({ title: 'Find Me' });
      const found = controller.findOne(created.id);
      expect(found).toHaveProperty('title', 'Find Me');
    });

    it('should throw NotFoundException for non-existent id', () => {
      expect(() => controller.findOne('999')).toThrow();
    });
  });

  describe('update', () => {
    it('should update an item', () => {
      const created = controller.create({ title: 'Original' });
      const updated = controller.update(created.id, { title: 'Updated', completed: true });
      expect(updated).toHaveProperty('title', 'Updated');
      expect(updated).toHaveProperty('completed', true);
    });
  });

  describe('remove', () => {
    it('should remove an item', () => {
      const created = controller.create({ title: 'Delete Me' });
      expect(() => controller.remove(created.id)).not.toThrow();
      expect(() => controller.findOne(created.id)).toThrow();
    });

    it('should throw NotFoundException for non-existent id', () => {
      expect(() => controller.remove('999')).toThrow();
    });
  });
});
