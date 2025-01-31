import { AuthRepository } from '../repositories/authRepository';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  public async createUser(
    username: string,
    email: string,
    password: string,
    role: 'admin' | 'user'
  ): Promise<User | Error> {
    if (!username || !email || !password || !role)
      throw new Error('Missing required fields');

    //TODO: Add verification if user already exists

    try {
      const hashedPassword: string = await bcrypt.hash(password, 10);

      const newUser: User = {
        id: Date.now().toString(),
        username,
        email,
        password: hashedPassword,
        role,
        createdAt: new Date(),
      };

      return this.authRepository.createUser(newUser);
    } catch {
      throw new Error('Failed while trying to create new user');
    }
  }
}
