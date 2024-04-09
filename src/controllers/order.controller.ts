import { OrderService } from '../services/order.service';
import { Response } from 'express';
import { OrderInstance } from '../utils/instances/order.instance';
import { OrderItemService } from '../services/order-item.service';
import { CreateOrderItemDto } from '../utils/dtos/order/create-order-item.dto';

export class OrderController {
  constructor(
    private orderService: OrderService,
    private itemService: OrderItemService,
  ) {}

  async findAll(req: any, res: Response): Promise<void> {
    const userId: number = req.user.id;
    const orders = await this.orderService.findAll(userId);
    res.status(200).json(orders);
  }

  async create(req: any, res: Response): Promise<void> {
    const userId: number = req.user.id;
    const order: OrderInstance = await this.orderService.create(userId);
    res.status(200).json(order);
  }

  async findOne(req: any, res: Response): Promise<void> {
    const orderId: number = parseInt(req.params.id);
    const orderItems: CreateOrderItemDto[] =
      await this.itemService.findAll(orderId);
    res.status(200).json(orderItems);
  }
}
