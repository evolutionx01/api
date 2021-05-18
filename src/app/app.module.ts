import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterUserModule } from './register-user/register-user.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RegisterConsumerModule } from './register-consumer/register-consumer.module';
import { MulterModule } from '@nestjs/platform-express';
import {AddBroadcastModule} from "./add-broadcast/add-broadcast.module";

@Module({
  imports: [
      AddBroadcastModule,
    RegisterUserModule,
    RegisterConsumerModule,
    ProductsModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0-vvuzr.mongodb.net/akucdb?retryWrites=true&w=majority',
    ),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
