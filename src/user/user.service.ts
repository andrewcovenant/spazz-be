import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private user: User[] = [];

  insertUser(username: string, password: string, email: string) {
    const userId = Math.random().toString();
    const newUser = new User(userId, username, password, email);
    this.user.push(newUser);

    return userId;
  }

  fetchAllUsers() {
    return [...this.user];
  }

  fetchUser(id: string) {
    return { ...this.findUser(id)[0] };
  }

  deleteUser(id: string) {
    this.user = this.user.filter((user) => user.id !== id);

    return [...this.user];
  }

  updateUser(id: string, username: string, password: string, email: string) {
    const [user, userIndex] = this.findUser(id);
    const updatedUser = { ...user };

    if (username) {
      updatedUser.username = username;
    }
    if (password) {
      updatedUser.password = password;
    }
    if (email) {
      updatedUser.email = email;
    }

    this.user[userIndex] = updatedUser;

    return { ...updatedUser };
  }

  private findUser(id: string): [User, number] {
    const userIndex = this.user.findIndex((user) => user.id === id);
    const user = this.user[userIndex];

    return [user, userIndex];
  }
}
