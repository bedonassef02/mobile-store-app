import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { signUpPipe } from '../utils/pipes/users/sign-up.pipe';
import { UserService } from '../services/user.service';
import { TokenService } from '../services/token.service';
import { signInPipe } from '../utils/pipes/users/sign-in.pipe';

export const router = Router();

const authController = new AuthController(
  new AuthService(new UserService(), new TokenService()),
);

router.post('/sign-up', signUpPipe, authController.signUp.bind(authController));
router.post('/sign-in', signInPipe, authController.signIn.bind(authController));
