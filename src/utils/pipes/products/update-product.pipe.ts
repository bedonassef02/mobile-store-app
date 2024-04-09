import { body } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { CategoryInstance } from '../../instances/category.instance';
import { categoryService } from '../../ioc/services.ioc';

export const updateProductPipe = [
  body('name')
    .optional()
    .isString()
    .withMessage('name must be a string')
    .isLength({ max: 64 }),

  body('description')
    .optional()
    .isString()
    .withMessage('description must be a string'),

  body('price').optional().isNumeric().withMessage('Price must be a number'),

  body('categoryId')
    .optional()
    .isNumeric()
    .withMessage('Category ID must be a number')
    .custom(async (categoryId): Promise<boolean> => {
      const category: CategoryInstance =
        await categoryService.findByPk(categoryId);
      if (!category) {
        throw new Error(`Category ID ${category} not found`);
      }
      return true;
    }),

  // Handle validation errors
  handleValidationErrorsMiddleware,
];
