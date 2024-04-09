import { Response, NextFunction } from 'express';
import { orderService } from '../ioc/services.ioc';
import { OrderStatus } from '../types/order-status.type';

export const paymentMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const orderId: number = parseInt(req.params.orderId);
  const userId: number = req.user.id;
  const order: any = await orderService.findOne(orderId);
  if (!order) {
    return res.status(404).json({ message: `order ${orderId} not found` });
  }
  if (order.userId !== userId) {
    return res
      .status(401)
      .json({ message: `order ${orderId} is not your own` });
  }
  if (order.status !== OrderStatus.PENDING) {
    return res
      .status(400)
      .json({ message: `can't pay order ${orderId} because ${order.status}` });
  }
  next();
};
