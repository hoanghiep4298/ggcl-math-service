import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { host: '0.0.0.0', port: 4000 },
      logger: ['log', 'debug', 'error', 'warn', 'verbose'], // bật log chi tiết
    },
  );
  await app.listen();
}
bootstrap();
