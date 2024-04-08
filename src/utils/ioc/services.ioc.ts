import { ImageService } from '../../services/image.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { CartService } from '../../services/cart.service';
import { CartProductService } from '../../services/cart-product.service';
import { OrderService } from '../../services/order.service';
import { OrderItemService } from '../../services/order-item.service';
import { WishlistService } from '../../services/wishlist.service';

export const imageService: ImageService = new ImageService();
export const userService: UserService = new UserService();
export const tokenService: TokenService = new TokenService();
export const categoryService: CategoryService = new CategoryService();
export const cartProductService: CartProductService = new CartProductService();
export const wishlistService: WishlistService = new WishlistService();

export const authService: AuthService = new AuthService(
  userService,
  tokenService,
);

export const productService: ProductService = new ProductService(imageService);

export const cartService: CartService = new CartService(cartProductService);
export const orderService: OrderService = new OrderService(cartProductService);
export const orderItemService: OrderItemService = new OrderItemService(
  productService,
);
