import { Router } from 'express';
import { CartProductService } from '../services/cart-product.service';
import { CartProductController } from '../controllers/cart-product.controller';
import { cartMiddleware } from '../utils/middlewares/cart.middleware';
import { createCartProductPipe } from '../utils/pipes/cart/create-cart-product.pipe';
import { deleteCartProductPipe } from '../utils/pipes/cart/delete-cart-product.pipe';

// Initialize the router
export const router: Router = Router({ mergeParams: true });

// Initialize the controller with its service
const cartProductController: CartProductController = new CartProductController(
  new CartProductService(),
);

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
