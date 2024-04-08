import { CartService } from '../../services/cart.service';

const cartService: CartService = new CartService();
export const signUpListener = async (userId: number) => {
  await cartService.create(userId);
};
