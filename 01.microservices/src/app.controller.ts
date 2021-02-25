import { Controller, Get, UseFilters } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ms2/calc')
  async getMs2Calc() {
    const res = await this.appService.getMs2Calc();
    console.log(`Response from MS 2: `, res);
    return res;
  }

  @Get('/luckytime')
  async getLuckyTime() {
    const res = await this.appService.getLuckyTime();
    console.log(`Response from MS 2: `, res);
    return res;
  }
}
