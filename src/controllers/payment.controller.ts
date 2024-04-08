import { Response } from 'express';
import { PaymentService } from '../services/payment.service';
import { OrderService } from '../services/order.service';
import { OrderStatus } from '../utils/types/order-status.type';

export class PaymentController {
  constructor(
    private paymentService: PaymentService,
    private orderService: OrderService,
  ) {}

  async create(req: any, res: Response): Promise<void> {
    const orderId: number = parseInt(req.params.orderId);
    const payment = await this.paymentService.createPaymentSession(orderId);
    res.status(200).json(payment);
  }

  async success(req: any, res: Response): Promise<void> {
    const orderId: number = parseInt(req.query.orderId);
    await this.orderService.updateStatus(orderId, OrderStatus.PAID);
    res.status(200).json({ message: `order ${orderId} paid successfully` });
  }

  async cancel(req: any, res: Response): Promise<void> {
    const orderId: number = parseInt(req.query.orderId);
    await this.orderService.updateStatus(orderId, OrderStatus.CANCELLED);
    res.status(200).json({ message: `order ${orderId} canceled` });
  }
}
