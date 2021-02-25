import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureApp } from './configure-app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureApp(app, 'hdfjsdbhjfdbsj');

  await app.listen(3000);
}
bootstrap();
