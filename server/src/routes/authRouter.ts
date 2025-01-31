import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const authController = new AuthController();
const authRouter: Router = Router();

authRouter.post('/register', authController.createUser);

export default authRouter;
