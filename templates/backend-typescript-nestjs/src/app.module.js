import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 % ;
if (database) {
     %  > ;
    import { connectDatabase } from './config/db';
     % ;
}
 %  >
    @Module({
        imports: [],
        controllers: [AppController],
        providers: [AppService],
    })
    class AppModule {
        async onModuleInit() {
             % ;
            if (database) {
                 %  >
                ;
                if (process.env.NODE_ENV !== 'test') {
                    await connectDatabase();
                }
                 % ;
            }
             %  >
            ;
        }
    };
//# sourceMappingURL=app.module.js.map