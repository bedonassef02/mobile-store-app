import { Response, NextFunction } from 'express';
import { orderService } from '../ioc/services.ioc';

export const orderMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const orderId: number = parseInt(req.params.id);
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
  next();
};
