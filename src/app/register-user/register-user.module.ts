import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RegisterUserController } from './register-user.controller';
import { RegisterUserService } from './register-user.service';
import { RegisterUserSchema } from './register-user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RegisterUser', schema: RegisterUserSchema }
    ])
  ],
  controllers: [RegisterUserController],
  providers: [RegisterUserService]
})
export class RegisterUserModule {}
