import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { router as cartProductRouter } from './cart-product.router';
import { cartController } from '../utils/ioc/controllers.ioc';

export const router: Router = Router();

router.use(isAuthMiddleware);
router.route('/').get(cartController.findOne.bind(cartController));

router.use('/:cartId/products', cartProductRouter);
