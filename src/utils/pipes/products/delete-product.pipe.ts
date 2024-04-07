import { param } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { ProductService } from '../../../services/product.service';
import { ProductInstance } from '../../instances/product.instance';
import { ImageService } from '../../../services/image.service';

const productService: ProductService = new ProductService(new ImageService());
export const deleteProductPipe = [
  param('id')
    .isNumeric()
    .withMessage('Category ID must be a number.')
    .custom(async (id: number): Promise<boolean> => {
      const product: ProductInstance | null = await productService.findByPk(id);

      if (!product) {
        throw new Error(`Product with ID ${id} does not exist.`);
      }

      return true;
    }),
  handleValidationErrorsMiddleware,
];
