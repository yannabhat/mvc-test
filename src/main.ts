import {  NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()

  app.useStaticAssets(join(__dirname,"..","public"))
  app.setBaseViewsDir(join(__dirname,"..","views"))
  app.setViewEngine("hbs")
  await app.listen(3000,async()=>{
    const logger = new Logger(bootstrap.name);

    logger.debug(`Application is running on ${await app.getUrl()}`)
  });
}
bootstrap();
