import { cartProductService } from '../../../ioc/services.ioc';
import { readFile } from '../helper';
import { CreateCartProductDto } from '../../../dtos/cart/create-cart-product.dto';

export const insertCartProducts = async () => {
  try {
    const cartProductsEntries: CreateCartProductDto[] =
      readFile('cart-products.json');

    for (const cartProduct of cartProductsEntries) {
      await cartProductService.create(cartProduct);
    }
    console.log('Cart Products data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Cart Products data:', error.message);
  }
};
