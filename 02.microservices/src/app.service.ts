import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello from MS 02!';
  }
}
