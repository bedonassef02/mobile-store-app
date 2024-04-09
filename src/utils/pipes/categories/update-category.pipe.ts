import { body, param } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { CategoryInstance } from '../../instances/category.instance';
import { categoryService } from '../../ioc/services.ioc';

export const updateCategoryPipe = [
  param('id')
    .isNumeric()
    .withMessage('Category ID must be a number.')
    .custom(async (id: number): Promise<boolean> => {
      const category: CategoryInstance | null =
        await categoryService.findByPk(id);
      if (!category) {
        throw new Error(`Category with ID ${id} does not exist.`);
      }
      return true;
    }),

  body('name')
    .optional()
    .isString()
    .withMessage('category name must be a string'),

  body('parentId')
    .optional()
    .isNumeric()
    .withMessage('Parent ID must be a number')
    .custom(async (parentId: number, { req }) => {
      const id: number = req?.params?.id;
      if (parentId === id) {
        throw new Error(`Parent Id must be different from ${id}`);
      }
      const category: CategoryInstance | null =
        await categoryService.findByPk(parentId);

      if (!category) {
        throw new Error(`Cannot find category ${parentId}`);
      }
      return true;
    }),
  handleValidationErrorsMiddleware,
];
