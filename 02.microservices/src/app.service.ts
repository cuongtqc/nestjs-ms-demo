import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor (
    @Inject('CAL2_SERVICE') private clientCal: ClientProxy
  ) {}

  async onApplicationBootstrap() {    
    await this.clientCal.connect();
  }

  getHello(): string {
    return 'Hello from MS 02!';
  }

  async calculate(data: number[]) {
    const result = (data || []).reduce((a, b) => a + b);
    await this.clientCal.emit('calculated', result);
  }
}
