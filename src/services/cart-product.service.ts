import { redis } from '../config/redis.config';
import { CartProduct } from '../models/cart-product.model';
import { CreateCartProductDto } from '../utils/dtos/cart/create-cart-product.dto';

export class CartProductService {
  async findAll(cartId: number): Promise<any> {
    const cacheKey = `cart_products_${cartId}`;
    const cachedProducts: string | null = await redis.get(cacheKey);
    if (cachedProducts) {
      return JSON.parse(cachedProducts);
    }

    const products: any[] = await CartProduct.findAll({ where: { cartId } });
    await redis.set(cacheKey, JSON.stringify(products));
    return products;
  }

  async create(cartProductDto: CreateCartProductDto): Promise<any> {
    const product: any = await CartProduct.create(cartProductDto);
    await this.updateCache(cartProductDto.cartId);
    return product;
  }

  async findOne(cartId: number, productId: number): Promise<any> {
    return await CartProduct.findOne({ where: { cartId, productId } });
  }

  async delete(cartId: number, productId: number): Promise<void> {
    await CartProduct.destroy({ where: { cartId, productId } });
    await this.updateCache(cartId);
  }

  async deleteByCartId(cartId: number): Promise<void> {
    await CartProduct.destroy({ where: { cartId } });
    await this.updateCache(cartId);
  }

  private async updateCache(cartId: number): Promise<void> {
    const cacheKey = `cart_products_${cartId}`;
    await redis.del(cacheKey);
  }
}
