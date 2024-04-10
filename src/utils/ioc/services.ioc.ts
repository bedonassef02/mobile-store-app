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
import { PaymentService } from '../../services/payment.service';
import { PasswordService } from '../../services/password.service';
import { MailService } from '../../services/mail.service';

export const imageService: ImageService = new ImageService();
export const userService: UserService = new UserService();
export const tokenService: TokenService = new TokenService();
export const categoryService: CategoryService = new CategoryService();
export const cartProductService: CartProductService = new CartProductService();
export const wishlistService: WishlistService = new WishlistService();
export const passwordService: PasswordService = new PasswordService();
export const mailService: MailService = new MailService();

export const authService: AuthService = new AuthService(
  userService,
  tokenService,
  passwordService,
  mailService,
);

export const productService: ProductService = new ProductService(imageService);

export const cartService: CartService = new CartService(cartProductService);
export const orderService: OrderService = new OrderService(
  cartProductService,
  cartService,
);
export const orderItemService: OrderItemService = new OrderItemService(
  productService,
);

export const paymentService: PaymentService = new PaymentService();
