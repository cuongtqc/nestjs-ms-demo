import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({cmd: 'sum'})
  calculate(data: number[]) {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern({cmd: 'luckytime'})
  async evaluateTime(data: number) {
    if (data % 2 == 0) {
      return "true";
    } else {
      return "false";
    }
  }
}
