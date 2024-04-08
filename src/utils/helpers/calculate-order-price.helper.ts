import { ProductInstance } from '../instances/product.instance';
import { CreateCartProductDto } from '../dtos/cart/create-cart-product.dto';
import { ProductService } from '../../services/product.service';
import { ImageService } from '../../services/image.service';

const productService: ProductService = new ProductService(new ImageService());
export const calculatePrice = async (cartItems: CreateCartProductDto[]): Promise<number> => {
  const products: ProductInstance[] = await Promise.all(cartItems.map(item => productService.findByPk(item.productId)));
  return products.reduce((total, product) => total + product.price, 0);

};