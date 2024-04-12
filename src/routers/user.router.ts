import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { userController } from '../utils/ioc/controllers.ioc';
import { upload } from '../config/multer.config';
import { updateImageMiddleware } from '../utils/middlewares/images.middleware';
import { twoFAMiddleware } from '../utils/middlewares/2fa.middleware';

export const router: Router = Router();

router.use(isAuthMiddleware, twoFAMiddleware);

router
  .route('/')
  .get(userController.findOne.bind(userController))
  .patch(
    upload.single('image'),
    updateImageMiddleware,
    userController.update.bind(userController),
  );
