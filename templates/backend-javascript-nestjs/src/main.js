require('reflect-metadata');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const { HttpExceptionFilter } = require('./filters/http-exception.filter');
const { LoggingInterceptor } = require('./interceptors/logging.interceptor');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 NestJS server running on http://localhost:${port}`);
}
bootstrap();
