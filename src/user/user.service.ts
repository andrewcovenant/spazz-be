import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(
    username: string,
    password: string,
    email: string,
  ): Promise<string> {
    const newUser = new this.userModel({ username, password, email });
    const res = await newUser.save();
    return res.id;
  }

  async fetchUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    return user;
  }

  async fetchAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    return user.remove();
  }

  async updateUser(
    id: string,
    username: string,
    password: string,
    email: string,
  ): Promise<User> {
    const user = await this.userModel
      .findByIdAndUpdate(id, { username, password, email })
      .exec();
    return user;
  }
}
