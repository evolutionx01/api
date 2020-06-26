import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { stringify } from 'querystring';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private saltRounds = 10;
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(email: string, password: string) {
    const createdUser = new this.userModel({ email, password });
    return await createdUser.save();
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email });
  }

  async compareHash(attempt, existingPassword): Promise<boolean> {
    return await bcrypt.compare(attempt, existingPassword);
  }
}
