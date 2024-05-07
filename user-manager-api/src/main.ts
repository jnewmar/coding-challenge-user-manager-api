import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.NODE_DOCKER_PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
