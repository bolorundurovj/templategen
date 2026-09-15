import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<% if (database) { %>import { connectDatabase } from './config/db';<% } %>
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    <% if (database) { %>
    if (process.env.NODE_ENV !== 'test') {
      await connectDatabase();
    }
    <% } %>
  }
}

