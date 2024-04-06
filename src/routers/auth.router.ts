
import {Router} from 'express';
import { AuthController } from '../controllers/auth.controller';

export const router =  Router();
const authController = new AuthController();
const { signUpPipe } = require('../utils/pipes/users/sign-up.pipe');

router.post('/sign-up', signUpPipe, authController.signUp);
