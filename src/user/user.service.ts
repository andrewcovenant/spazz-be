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
    return { ...this.user.find((user) => user.id === id) };
  }

  deleteUser(id: string) {
    this.user = this.user.filter((user) => user.id !== id);

    return [...this.user];
  }

  updateUser(id: string, username: string, password: string, email: string) {
    const updatedUser = { ...this.user.find((user) => user.id === id) };

    //Daca ai tu o metoda mai buna de a face asta, te rog sa imi spui; Ca nu imi prea place cu if-uri;
    if (username) {
      updatedUser.username = username;
    }
    if (password) {
      updatedUser.password = password;
    }
    if (email) {
      updatedUser.email = email;
    }

    return updatedUser;
  }
}
