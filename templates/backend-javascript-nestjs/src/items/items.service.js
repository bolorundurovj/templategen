const { Injectable, NotFoundException } = require('@nestjs/common');

class ItemsService {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  findAll() {
    return this.items;
  }

  findOne(id) {
    const item = this.items.find((i) => i.id === id);
    if (!item) throw new NotFoundException(`Item with id ${id} not found`);
    return item;
  }

  create(dto) {
    const now = new Date().toISOString();
    const item = {
      id: String(this.nextId++),
      title: dto.title,
      description: dto.description || '',
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    this.items.push(item);
    return item;
  }

  update(id, dto) {
    const item = this.findOne(id);
    Object.assign(item, { ...dto, updatedAt: new Date().toISOString() });
    return item;
  }

  remove(id) {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) throw new NotFoundException(`Item with id ${id} not found`);
    this.items.splice(index, 1);
  }
}

Injectable()(ItemsService);

module.exports = { ItemsService };
