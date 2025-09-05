import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('test.sum')
  accumulate(@Payload() data: number[]): any {
    const result = (data || []).reduce((a, b) => a + b, 0);
    return { total: result };
  }
}
