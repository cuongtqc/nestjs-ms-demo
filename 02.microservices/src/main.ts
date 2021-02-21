import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000, port: 3000 },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
  console.log(`02.Microservice application is running on: ${await app.getUrl()}`);
}
bootstrap();
