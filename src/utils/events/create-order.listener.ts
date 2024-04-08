import { CartService } from '../../services/cart.service';
import { CartProductService } from '../../services/cart-product.service';
import { CreateCartProductDto } from '../dtos/cart/create-cart-product.dto';
import { OrderItemService } from '../../services/order-item.service';
import { ProductService } from '../../services/product.service';
import { ImageService } from '../../services/image.service';
import { eventEmitter } from './index';

const orderItemService: OrderItemService = new OrderItemService(new ProductService(new ImageService()));
const cartService: CartService = new CartService(new CartProductService());

export type OrderListenerDto = {
  orderId: number,
  cartItems: CreateCartProductDto[],
  cartId: number
}
eventEmitter.on('order.created', async (order: OrderListenerDto) => {
  await createOrderListener(order);
});
export const createOrderListener = async (order:OrderListenerDto) => {
  await createOrderItems(order.orderId, order.cartItems);
  await truncateCart(order.cartId);
};

const createOrderItems = async (orderId: number, cartItems: CreateCartProductDto[]): Promise<void> => {
  const productIds: number[] = cartItems.map(item => item.productId);
  await orderItemService.create(orderId, productIds);
};

const truncateCart = async (cartId: number) => {
  await cartService.delete(cartId);
};