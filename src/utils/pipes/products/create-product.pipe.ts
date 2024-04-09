import { body } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { CategoryInstance } from '../../instances/category.instance';
import { categoryService } from '../../ioc/services.ioc';

export const createProductPipe = [
  body('name')
    .notEmpty()
    .withMessage('Product name is required')
    .isLength({ max: 64 }),

  body('description').notEmpty().withMessage('Product description is required'),

  body('coverImage').notEmpty().withMessage('Cover image URL is required'),

  body('price').isNumeric().withMessage('Price must be a number'),

  body('categoryId')
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

  body('images')
    .optional()
    .isArray({ min: 1 })
    .withMessage('Images must be an array of strings'),

  // Handle validation errors
  handleValidationErrorsMiddleware,
];
