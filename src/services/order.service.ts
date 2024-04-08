import { Order } from '../models/order.model';
import { CreateOrderDto } from '../utils/dtos/order/create-order.dto';
import { CartProductService } from './cart-product.service';
import { CreateCartProductDto } from '../utils/dtos/cart/create-cart-product.dto';
import { OrderInstance } from '../utils/instances/order.instance';
import { eventEmitter } from '../utils/events';
import { OrderListenerDto } from '../utils/events/create-order.listener';
import { calculatePrice } from '../utils/helpers/calculate-order-price.helper';

export class OrderService {
  constructor(private cartProductService: CartProductService) {}

  async create(userId: number, cartId: number): Promise<OrderInstance> {
    const cartItems: CreateCartProductDto[] =
      await this.cartProductService.findAll(cartId);
    const totalPrice: number = await calculatePrice(cartItems);
    const order: OrderInstance = await this.createOrder(userId, totalPrice);
    const orderDto: OrderListenerDto = { orderId: order.id, cartId, cartItems };
    eventEmitter.emit('order.created', orderDto);
    return order;
  }

  private async createOrder(userId: number, totalPrice: number): Promise<any> {
    const createOrderDto: CreateOrderDto = { userId, totalPrice };
    return await Order.create(createOrderDto);
  }

  async findAll(userId: number): Promise<any> {
    return await Order.findAll({ where: { userId } });
  }

  async findOne(id: number): Promise<any> {
    return await Order.findByPk(id);
  }
}
