const { Module } = require('@nestjs/common');
const { ItemsController } = require('./items.controller');
const { ItemsService } = require('./items.service');

class ItemsModule {}

Module({
  controllers: [ItemsController],
  providers: [ItemsService],
})(ItemsModule);

module.exports = { ItemsModule };
