import { Cart } from '../models/cart.model';
import { CartProductService } from './cart-product.service';

export class CartService {
  constructor(private cartProductService:CartProductService) {
  }
  async create(userId: number): Promise<any> {
    return await Cart.create({ userId });
  }

  async findOne(userId: number): Promise<any> {
    return await Cart.findOne({ where: { userId } });
  }

  async delete(cartId: number): Promise<void>{
    await this.cartProductService.deleteByCartId(cartId);
  }
}
