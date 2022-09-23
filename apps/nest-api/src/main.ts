import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

(async () => {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || 3333;

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);
  Logger.log(`🚀 http://localhost:${port}/${globalPrefix}`);
})();
