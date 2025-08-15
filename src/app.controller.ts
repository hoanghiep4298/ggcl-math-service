import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'sum' })
  sum(numbers: number[]): number {
    // return numbers.reduce((a, b) => a + b, 0);
    return 123456;
  }
}
