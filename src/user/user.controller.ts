import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { User } from './user.model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async addUser(@Body() user: User) {
    const newUserId = await this.userService.insertUser(
      user.username,
      user.password,
      user.email,
    );

    return { id: newUserId };
  }

  @Get('all')
  async getUsers() {
    const users = await this.userService.fetchAllUsers();
    return users.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
    }));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') id: string) {
    const user = await this.userService.fetchUser(id);
    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Param('id') id: string) {
    this.userService.deleteUser(id);
    return null;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateUser(@Param('id') id: string, @Body() user: User) {
    await this.userService.updateUser(
      id,
      user.username,
      user.password,
      user.email,
    );
    return {
      id,
      username: user.username,
      email: user.email,
    };
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async replaceUser(@Param('id') id: string, @Body() user: User) {
    await this.userService.updateUser(
      id,
      user.username,
      user.password,
      user.email,
    );
    return {
      id,
      username: user.username,
      email: user.email,
    };
  }
}
