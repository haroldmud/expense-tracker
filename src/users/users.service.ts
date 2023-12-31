import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDocument } from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly UsersModel: Model<UsersDocument>,
  ) {}

  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<UsersDocument> {
    if (!username || !username || !password) {
      throw new BadRequestException('please provide all values');
    }
    return new this.UsersModel({ username, email, password }).save();
  }

  async findAll(): Promise<UsersDocument[]> {
    return this.UsersModel.find();
  }

  async findOne(username: string) {
    const user = await this.UsersModel.findOne({ username });

    if (!user) {
      throw new NotFoundException(`No user found with name ${username}`);
    }
    return user;
  }
}
