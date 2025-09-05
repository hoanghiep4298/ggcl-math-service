import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'my-service',
          brokers: ['kafka:9094'], // <-- if running NestJS on Mac
          // brokers: ['kafka:29092'], // <-- if running inside Docker
        },
        consumer: {
          groupId: 'my-consumer',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
