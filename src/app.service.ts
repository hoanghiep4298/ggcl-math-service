import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  // @MessagePattern({ cmd: 'sum' })
  // sum(numbers: number[]): number {
  //   return numbers.reduce((a, b) => a + b, 0);
  // }
}
