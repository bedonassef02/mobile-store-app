import { CartService } from '../../services/cart.service';
import { CartProductService } from '../../services/cart-product.service';
import { eventEmitter } from './index';

const cartService: CartService = new CartService(new CartProductService());

eventEmitter.on('user.created', async (userId) => {
  await signUpListener(userId);
});
export const signUpListener = async (userId: number) => {
  await cartService.create(userId);
};
