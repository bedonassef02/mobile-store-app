import { OrderService } from '../services/order.service';
import { Response } from 'express';
import { OrderInstance } from '../utils/instances/order.instance';

export class OrderController {
  constructor(private orderService: OrderService) {}

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
}
