import { param } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { ProductInstance } from '../../instances/product.instance';
import { productService } from '../../ioc/services.ioc';

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
