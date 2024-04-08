import { CartService } from '../../services/cart.service';
import { CartProductService } from '../../services/cart-product.service';

const cartService: CartService = new CartService(new CartProductService());

export const signUpListener = async (userId: number) => {
  await cartService.create(userId);
};
