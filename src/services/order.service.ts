import { Order } from '../models/order.model';
import { CreateOrderDto } from '../utils/dtos/order/create-order.dto';
import { CartProductService } from './cart-product.service';
import { CartService } from './cart.service';
import { CreateCartProductDto } from '../utils/dtos/cart/create-cart-product.dto';
import { ProductService } from './product.service';
import { ProductInstance } from '../utils/instances/product.instance';
import { OrderItemService } from './order-item.service';
import { OrderInstance } from '../utils/instances/order.instance';

export class OrderService {

  constructor(private cartProductService: CartProductService, private cartService: CartService, private productService: ProductService, private orderItemService: OrderItemService) {
  }

  async create(userId: number, cartId: number): Promise<OrderInstance> {
    const cartItems: CreateCartProductDto[] = await this.cartProductService.findAll(cartId);
    const totalPrice: number = await this.calculatePrice(cartItems);
    const order: OrderInstance = await this.createOrder(userId, totalPrice);
    await this.createOrderItems(order.id, cartItems);
    await this.cartService.delete(cartId);
    return order;
  }

  private async createOrder(userId: number, totalPrice: number): Promise<any> {
    const createOrderDto: CreateOrderDto = { userId, totalPrice };
    return await Order.create(createOrderDto);
  }

  private async createOrderItems(orderId: number, cartItems: CreateCartProductDto[]): Promise<void> {
    const productIds = cartItems.map(item => item.productId);
    await this.orderItemService.create(orderId, productIds);
  }

  private async calculatePrice(cartItems: CreateCartProductDto[]): Promise<number> {
    const products: ProductInstance[] = await Promise.all(cartItems.map(item => this.productService.findByPk(item.productId)));
    return products.reduce((total, product) => total + product.price, 0);
  }


  async findAll(userId: number): Promise<any> {
    return await Order.findAll({ where: { userId } });
  }

  async findOne(id: number): Promise<any> {
    return await Order.findByPk(id);
  }
}