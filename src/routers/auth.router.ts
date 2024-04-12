import { Router } from 'express';
import { signUpPipe } from '../utils/pipes/users/sign-up.pipe';
import { signInPipe } from '../utils/pipes/users/sign-in.pipe';
import { authController } from '../utils/ioc/controllers.ioc';
import { router as googleRouter } from './google.router';
import { router as githubRouter } from './github.router';
import { changePasswordPipe } from '../utils/pipes/users/change-password.pipe';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { resetPasswordPipe } from '../utils/pipes/users/reset-password.pipe';
import { forgetPasswordPipe } from '../utils/pipes/users/forget-password.pipe';
import { twoFAMiddleware } from '../utils/middlewares/2fa.middleware';
import { enable2FAPipe } from '../utils/pipes/users/enable-2fa.pipe';
import { verify2FAPipe } from '../utils/pipes/users/verify-2fa.pipe';

export const router: Router = Router();

// TODO: enable 2FA

router.post('/sign-up', signUpPipe, authController.signUp.bind(authController));
router.post('/sign-in', signInPipe, authController.signIn.bind(authController));

router.patch(
  '/change-password',
  isAuthMiddleware,
  twoFAMiddleware,
  changePasswordPipe,
  authController.changePassword.bind(authController),
);

router.post(
  '/forget-password',
  forgetPasswordPipe,
  authController.forgetPassword.bind(authController),
);

router.patch(
  '/reset-password',
  resetPasswordPipe,
  authController.resetPassword.bind(authController),
);

router.post(
  '/enable-2fa',
  isAuthMiddleware,
  twoFAMiddleware,
  enable2FAPipe,
  authController.enable2FA.bind(authController),
);

router.post(
  '/verify-2fa',
  verify2FAPipe,
  isAuthMiddleware,
  authController.verify2FA.bind(authController),
);

router.use('/google', googleRouter);
router.use('/github', githubRouter);
