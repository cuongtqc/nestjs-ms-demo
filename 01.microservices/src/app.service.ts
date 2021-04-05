import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor() {}

  // async onApplicationBootstrap() {
  //   await this.clientCal.connect()
  // }

  // getHello(): string {
  //   return 'Hello from MS 01!';
  // }

  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'rpc-route',
    queue:'rpc-queue'
  })

  public async SendData(msg: {}) {
    const data = [1,2,4];
    return {
      response: 42
    };
  }

  // async getLuckyTime() {
  //   const message = { cmd: 'luckytime' };
  //   const date = new Date();
  //   const data = date.getMinutes();
  //   console.log(data);
  //   return this.clientCal.send(message, data).toPromise();
  // }
}
