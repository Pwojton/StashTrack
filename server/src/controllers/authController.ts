import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { User } from '../models/User';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public createUser = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;
    const newUser: User | Error = await this.authService.createUser(
      username,
      email,
      password,
      role
    );
    if (!newUser) res.status(500);

    res.status(201).json(newUser);
  };
}
