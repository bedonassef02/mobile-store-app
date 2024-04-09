import { CreateCartProductDto } from '../dtos/cart/create-cart-product.dto';
import { cartService, orderItemService } from '../ioc/services.ioc';

export type OrderListenerDto = {
  orderId: number;
  cartItems: CreateCartProductDto[];
  cartId: number;
};
export const createOrderListener = async (order: OrderListenerDto) => {
  await createOrderItems(order.orderId, order.cartItems);
  await truncateCart(order.cartId);
};

const createOrderItems = async (
  orderId: number,
  cartItems: CreateCartProductDto[],
): Promise<void> => {
  const productIds: number[] = cartItems.map((item) => item.productId);
  await orderItemService.create(orderId, productIds);
};

const truncateCart = async (cartId: number) => {
  await cartService.delete(cartId);
};
