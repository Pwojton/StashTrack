import { User } from '../models/User';

export class UserRepository {
  private users: User[] = []; //temporary solution to mock database

  public createUser(user: User): User {
    this.users.push(user);
    return user;
  }
}
