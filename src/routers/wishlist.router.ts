import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { wishlistController } from '../utils/ioc/controllers.ioc';
import { twoFAMiddleware } from '../utils/middlewares/2fa.middleware';

export const router: Router = Router();

router.use(isAuthMiddleware, twoFAMiddleware);

router.route('/').get(wishlistController.findAll.bind(wishlistController));

router
  .route('/:productId')
  .get(wishlistController.findOne.bind(wishlistController))
  .patch(isAuthMiddleware, wishlistController.toggle.bind(wishlistController));
