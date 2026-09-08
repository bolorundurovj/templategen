const { Module } = require('@nestjs/common');
const { AppController } = require('./app.controller');
const { AppService } = require('./app.service');
<% if (database) { %>const { connectDatabase } = require('./config/db');<% } %>

class AppModule {
  async onModuleInit() {
    <% if (database) { %>
    if (process.env.NODE_ENV !== 'test') {
      await connectDatabase();
    }
    <% } %>
  }
}

Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})(AppModule);

module.exports = { AppModule };
