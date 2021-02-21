import { Module } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ClientTCP],
})
export class AppModule {}
