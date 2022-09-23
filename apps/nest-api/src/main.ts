import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

(async () => {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3333;

  await app.listen(port);
  Logger.log(`🚀 http://localhost:3333/graphql`);
})();
