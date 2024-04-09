import { body, param } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { ProductInstance } from '../../instances/product.instance';
import { cartProductService, productService } from '../../ioc/services.ioc';

export const createCartProductPipe = [
  body('productId')
    .notEmpty()
    .withMessage('Product Id name is required')
    .isNumeric()
    .withMessage('Product Id must be a number')
    .custom(async (productId): Promise<boolean> => {
      const product: ProductInstance = await productService.findByPk(productId);
      if (!product) {
        throw new Error(`Product ${productId} not found`);
      }
      return true;
    }),
  param('cartId')
    .isInt()
    .withMessage('Cart ID must be a number')
    .custom(async (cartId, { req }): Promise<boolean> => {
      const productId: number = req.body.productId;
      const cartProduct = await cartProductService.findOne(cartId, productId);
      if (cartProduct) {
        throw new Error(`product ${productId} is already in the cart`);
      }
      return true;
    }),
  handleValidationErrorsMiddleware,
];
