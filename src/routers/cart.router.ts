import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { router as cartProductRouter } from './cart-product.router';
import { cartController } from '../utils/ioc/controllers.ioc';
import { twoFAMiddleware } from '../utils/middlewares/2fa.middleware';
import { isUserUpdatedMiddleware } from '../utils/middlewares/is-user-updated.middleware';

export const router: Router = Router();

router.use(isAuthMiddleware, isUserUpdatedMiddleware, twoFAMiddleware);
router.route('/').get(cartController.findOne.bind(cartController));

router.use('/:cartId/products', cartProductRouter);
