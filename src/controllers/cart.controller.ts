import { CartService } from '../services/cart.service';
import { Response } from 'express';

export class CartController {
  constructor(private readonly cartService: CartService) {}

  async findOne(req: any, res: Response): Promise<void> {
    const userId = req.user.id;
    const cart = await this.cartService.findOne(userId);
    res.status(200).json(cart);
  }
}
