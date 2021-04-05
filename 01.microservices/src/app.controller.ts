import { Controller, Get, UseFilters } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { response } from 'express';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private cal_output; 
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('/ms2/calc')
  async sendData() {
    const ans = await this.appService.SendData('sum');
    return ans
  }

  // @EventPattern('calculated')
  // async handleCalculated(result: number) {
  //   this.cal_output = await this.appService.HandleCalculated(result);
  // }

  // @Get('/luckytime')
  // async getLuckyTime() {
  //   const res = await this.appService.getLuckyTime();
  //   console.log(`Response from MS 2: `, res);
  //   return res;
  // }
}
