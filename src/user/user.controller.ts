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
  addUser(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    const newUserId = this.userService.insertUser(username, password, email);

    return { id: newUserId };
  }

  @Get('all')
  getUsers() {
    return this.userService.fetchAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.fetchUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    return this.userService.updateUser(id, username, password, email);
  }
}
