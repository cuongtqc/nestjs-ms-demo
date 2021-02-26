import { Controller, Get, UseFilters } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private cal_output; 
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ms2/calc')
  async sendData() {
    await this.appService.SendData();
    console.log(`Result from MS2: ${this.cal_output}`)
    return this.cal_output;
  }

  @EventPattern('calculated')
  async handleCalculated(result: number) {
    this.cal_output = await this.appService.HandleCalculated(result);
  }

  @Get('/luckytime')
  async getLuckyTime() {
    const res = await this.appService.getLuckyTime();
    console.log(`Response from MS 2: `, res);
    return res;
  }
}
