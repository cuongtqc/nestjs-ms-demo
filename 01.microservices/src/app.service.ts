import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CAL_SERVICE') private clientCal: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    await this.clientCal.connect()
  }

  getHello(): string {
    return 'Hello from MS 01!';
  }

  async SendData() {
    const data = [1,2,4];
    await this.clientCal.emit<any>('sum', data);
  }

  async HandleCalculated(result: number) {
    console.log(`Result from MS2: ${result}`);
    return result;
  }

  async getLuckyTime() {
    const message = { cmd: 'luckytime' };
    const date = new Date();
    const data = date.getMinutes();
    console.log(data);
    return this.clientCal.send(message, data).toPromise();
  }
}
