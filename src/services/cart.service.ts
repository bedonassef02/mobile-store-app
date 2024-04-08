import { Cart } from '../models/cart.model';

export class CartService {
  async create(userId: number): Promise<any> {
    return await Cart.create({ userId });
  }

  async findOne(userId: number): Promise<any> {
    return await Cart.findOne({ where: { userId } });
  }
}
