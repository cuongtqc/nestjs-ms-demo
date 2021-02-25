import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CAL_SERVICE') private clientCal: ClientProxy,
  ) {}

  async onApplicationBootstrap() {
    await this.clientCal.connect()
  }

  getHello(): string {
    return 'Hello from MS 01!';
  }

  async getMs2Calc() {
    const message = { cmd: 'sum' };
    const data = [1,2,4];
    return this.clientCal.send(message, data).toPromise();
  }

  async getLuckyTime() {
    const message = { cmd: 'luckytime' };
    const date = new Date();
    const data = date.getMinutes();
    console.log(data);
    return this.clientCal.send(message, data).toPromise();
  }
}
