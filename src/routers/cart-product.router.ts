import { Router } from 'express';
import { cartMiddleware } from '../utils/middlewares/cart.middleware';
import { createCartProductPipe } from '../utils/pipes/cart/create-cart-product.pipe';
import { deleteCartProductPipe } from '../utils/pipes/cart/delete-cart-product.pipe';
import { cartProductController } from '../utils/ioc/controllers.ioc';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { twoFAMiddleware } from '../utils/middlewares/2fa.middleware';
import { isUserUpdatedMiddleware } from '../utils/middlewares/is-user-updated.middleware';

// Initialize the router
export const router: Router = Router({ mergeParams: true });

router.use(
  isAuthMiddleware,
  isUserUpdatedMiddleware,
  twoFAMiddleware,
  cartMiddleware,
);

// Define routes for cart products
router
  .route('/')
  .get(cartProductController.findAll.bind(cartProductController))
  .post(
    createCartProductPipe,
    cartProductController.create.bind(cartProductController),
  );

router
  .route('/:productId')
  .delete(
    deleteCartProductPipe,
    cartProductController.delete.bind(cartProductController),
  );
