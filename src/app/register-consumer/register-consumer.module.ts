import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RegisterConsumerController } from './register-consumer.controller';
import { RegisterConsumerService } from './register-consumer.service';
import { RegisterConsumerSchema } from './register-consumer.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RegisterConsumer', schema: RegisterConsumerSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  controllers: [RegisterConsumerController],
  providers: [RegisterConsumerService],
})
export class RegisterConsumerModule {}
