import { AuthController } from '../../controllers/auth.controller';
import {
  authService,
  cartProductService,
  cartService,
  categoryService,
  productService,
  wishlistService,
} from './services.ioc';
import { CartController } from '../../controllers/cart.controller';
import { CartProductController } from '../../controllers/cart-product.controller';
import { ProductController } from '../../controllers/product.controller';
import { CategoryController } from '../../controllers/category.controller';
import { WishlistController } from '../../controllers/wishlist.controller';

export const authController: AuthController = new AuthController(authService);
export const cartController: CartController = new CartController(cartService);

export const cartProductController: CartProductController =
  new CartProductController(cartProductService);

export const categoryController: CategoryController = new CategoryController(
  categoryService,
);
export const productController: ProductController = new ProductController(
  productService,
);

export const wishlistController: WishlistController = new WishlistController(
  wishlistService,
);
