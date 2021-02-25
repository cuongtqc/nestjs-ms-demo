import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cal_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
  console.log(`01. Microservice application is running on: ${await app.getUrl()}`);
}
bootstrap();
