import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Creating application...');
  const app = await NestFactory.create(AppModule);
  console.log('Application created, starting server...');
  await app.listen(5000);
  console.log('Server is running on http://localhost:5000');
}
bootstrap();
