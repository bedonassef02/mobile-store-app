import { readFile } from '../helper';
import { CreateProductDto } from '../../../dtos/product/create-product.dto';
import { productService } from '../../../ioc/services.ioc';

export const insertProducts = async () => {
  try {
    const productsEntries: CreateProductDto[] = readFile('products.json');

    for (const product of productsEntries) {
      await productService.create(product);
    }
    console.log('Products data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Products data:', error.message);
  }
};
