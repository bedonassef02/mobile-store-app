import { NextFunction, Response } from 'express';
import { CartService } from '../../services/cart.service';
import { CartInstance } from '../instances/cart.instance';

const cartService: CartService = new CartService();
export const cartMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const userId: number = req.user.id;
  const cartId: number = req.params.cartId;
  const cart: CartInstance = await cartService.findOne(userId);

  if (cart.id != cartId) {
    return res
      .status(401)
      .json({ message: `you are not authorized to access this cart` });
  }
  next();
};
