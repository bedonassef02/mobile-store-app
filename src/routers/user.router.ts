
import {Router} from 'express';
import { AuthController } from '../controllers/auth.controller';

const router =  Router();
const authController = new AuthController();
const { signUpPipe } = require('../utils/pipes/users/sign-up.pipe');

router.post('/sign-up', signUpPipe, authController.signUp);

module.exports = router;
