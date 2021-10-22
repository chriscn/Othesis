import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Define middlewares
  app.use(helmet());

  await app.listen(3000);

  console.log(`Othesis running on ${await app.getUrl()}`);

}

bootstrap();
