import { Router } from 'express';
import { cartMiddleware } from '../utils/middlewares/cart.middleware';
import { createCartProductPipe } from '../utils/pipes/cart/create-cart-product.pipe';
import { deleteCartProductPipe } from '../utils/pipes/cart/delete-cart-product.pipe';
import { cartProductController } from '../utils/ioc/controllers.ioc';

// Initialize the router
export const router: Router = Router({ mergeParams: true });

router.use(cartMiddleware);

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
