import { Router } from 'express';
import { signUpPipe } from '../utils/pipes/users/sign-up.pipe';
import { signInPipe } from '../utils/pipes/users/sign-in.pipe';
import { authController } from '../utils/ioc/controllers.ioc';
import { router as googleRouter } from './google.router';
import { router as githubRouter } from './github.router';
import { changePasswordPipe } from '../utils/pipes/users/change-password.pipe';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';

export const router: Router = Router();

router.post('/sign-up', signUpPipe, authController.signUp.bind(authController));
router.post('/sign-in', signInPipe, authController.signIn.bind(authController));

router.patch('/change-password', isAuthMiddleware,changePasswordPipe, authController.changePassword.bind(authController));

router.use('/google', googleRouter);
router.use('/github', githubRouter);
