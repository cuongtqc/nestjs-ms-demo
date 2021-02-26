import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @EventPattern('sum')
  async handleCalculate(data: number[]) {
    this.appService.calculate(data);
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
