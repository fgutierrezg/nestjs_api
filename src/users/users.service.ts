import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [{ id: 1, name: 'Juan' }];

    findAll() {
      return this.users;
    }
  
    findOne(id: string) {
      return this.users.find(user => user.id === Number(id));
    }
  
    create(user: { name: string }) {
      const newUser = { id: this.users.length + 1, ...user };
      this.users.push(newUser);
      return newUser;
    }

}
