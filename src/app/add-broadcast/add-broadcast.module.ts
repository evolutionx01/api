import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddBroadcastController } from './add-broadcast.controller';
import { AddBroadcastService } from './add-broadcast.service';
import { AddBroadcastSchema } from './add-broadcast.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AddBroadcast', schema: AddBroadcastSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  exports: [AddBroadcastService],
  controllers: [AddBroadcastController],
  providers: [AddBroadcastService],
})
export class AddBroadcastModule {}
