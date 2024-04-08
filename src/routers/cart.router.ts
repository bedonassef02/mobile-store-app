import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { CartController } from '../controllers/cart.controller';
import { CartService } from '../services/cart.service';
import { router as cartProductRouter } from './cart-product.router';
import { CartProductService } from '../services/cart-product.service';

export const router: Router = Router();

const cartController: CartController = new CartController(new CartService(new CartProductService()));

router.use(isAuthMiddleware);
router.route('/').get(cartController.findOne.bind(cartController));

router.use('/:cartId/products', cartProductRouter);
