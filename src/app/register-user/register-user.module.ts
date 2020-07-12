import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RegisterUserController } from './register-user.controller';
import { RegisterUserService } from './register-user.service';
import { RegisterUserSchema } from './register-user.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RegisterUser', schema: RegisterUserSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  exports: [RegisterUserService],
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
})
export class RegisterUserModule {}
