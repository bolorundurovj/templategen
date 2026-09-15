const {
  Controller,
  Dependencies,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
} = require('@nestjs/common');
const { ItemsService } = require('./items.service');

class ItemsController {
  constructor(itemsService) {
    this.itemsService = itemsService || new ItemsService();
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

const desc = (prop) =>
  Object.getOwnPropertyDescriptor(ItemsController.prototype, prop);

Controller(['api/items', 'items'])(ItemsController);
Dependencies(ItemsService)(ItemsController);
Get()(ItemsController.prototype, 'findAll', desc('findAll'));
Get(':id')(ItemsController.prototype, 'findOne', desc('findOne'));
Post()(ItemsController.prototype, 'create', desc('create'));
Put(':id')(ItemsController.prototype, 'update', desc('update'));
Delete(':id')(ItemsController.prototype, 'remove', desc('remove'));
HttpCode(HttpStatus.NO_CONTENT)(
  ItemsController.prototype,
  'remove',
  desc('remove')
);
Param('id')(ItemsController.prototype, 'findOne', 0);
Param('id')(ItemsController.prototype, 'update', 0);
Param('id')(ItemsController.prototype, 'remove', 0);
Body()(ItemsController.prototype, 'create', 0);
Body()(ItemsController.prototype, 'update', 1);

module.exports = { ItemsController };
