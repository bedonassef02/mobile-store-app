import { OrderItem } from '../models/order-item.model';
import { CreateOrderItemDto } from '../utils/dtos/order/create-order-item.dto';
import { ProductService } from './product.service';
import { ProductInstance } from '../utils/instances/product.instance';

export class OrderItemService {
  constructor(private productService: ProductService) {}

  async create(orderId: number, productIds: number[]): Promise<void> {
    const orderItems: CreateOrderItemDto[] = await Promise.all(
      productIds.map(async (productId) => {
        const product: ProductInstance =
          await this.productService.findByPk(productId);
        return { orderId, price: product.price, productId };
      }),
    );
    await OrderItem.bulkCreate(orderItems);
  }

  async findAll(orderId: number): Promise<any> {
    return await OrderItem.findAll({ where: { orderId } });
  }
}
