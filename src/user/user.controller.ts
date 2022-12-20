import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    const newUserId = await this.userService.insertUser(
      username,
      password,
      email,
    );

    return { id: newUserId };
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.fetchUser(id);
    return user;
  }

  @Get('all')
  async getUsers() {
    const users = await this.userService.fetchAllUsers();
    return users;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const user = this.userService.deleteUser(id);
    return user;
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    await this.userService.updateUser(id, username, password, email);
    return null;
  }
}
