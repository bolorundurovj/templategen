const { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, BadRequestException } = require('@nestjs/common');
const { ItemsService } = require('./items.service');

class ItemsController {
  constructor() {
    this.itemsService = new ItemsService();
  }

  findAll() {
    return this.itemsService.findAll();
  }

  findOne(id) {
    return this.itemsService.findOne(id);
  }

  create(dto) {
    if (!dto.title) {
      throw new BadRequestException('Title is required');
    }
    return this.itemsService.create(dto);
  }

  update(id, dto) {
    return this.itemsService.update(id, dto);
  }

  remove(id) {
    this.itemsService.remove(id);
  }
}

Controller('items')(ItemsController);
Get()(ItemsController.prototype, 'findAll');
Get(':id')(ItemsController.prototype, 'findOne');
Post()(ItemsController.prototype, 'create');
Put(':id')(ItemsController.prototype, 'update');
Delete(':id')(ItemsController.prototype, 'remove');
HttpCode(HttpStatus.NO_CONTENT)(ItemsController.prototype, 'remove');
Param('id')(ItemsController.prototype, 'findOne', 0);
Param('id')(ItemsController.prototype, 'update', 0);
Param('id')(ItemsController.prototype, 'remove', 0);
Body()(ItemsController.prototype, 'create', 0);
Body()(ItemsController.prototype, 'update', 1);

module.exports = { ItemsController };
