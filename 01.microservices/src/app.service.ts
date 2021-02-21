import { Injectable } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(private clientTcp: ClientTCP) {
  }

  getHello(): string {
    return 'Hello from MS 01!';
  }

  getMs2Calc() {
    const message = { cmd: 'sum' };
    const data = [1,2,4];
    return this.clientTcp.send(message, data).toPromise();
  }
}
