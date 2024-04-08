import { CartProduct } from '../models/cart-product.model';
import { CreateCartProductDto } from '../utils/dtos/cart/create-cart-product.dto';

export class CartProductService {
  async findAll(cartId: number): Promise<any> {
    return await CartProduct.findAll({ where: { cartId } });
  }

  async create(cartProductDto: CreateCartProductDto): Promise<any> {
    return await CartProduct.create(cartProductDto);
  }

  async findOne(cartId: number, productId: number): Promise<any> {
    return await CartProduct.findOne({ where: { cartId, productId } });
  }

  async delete(cartId: number, productId: number): Promise<void> {
    await CartProduct.destroy({ where: { cartId, productId } });
  }

  async deleteByCartId(cartId: number): Promise<void> {
    await CartProduct.destroy({ where: { cartId } });
  }
}
