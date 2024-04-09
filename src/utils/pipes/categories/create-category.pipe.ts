import { body } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { CategoryInstance } from '../../instances/category.instance';
import slugify from 'slugify';
import { categoryService } from '../../ioc/services.ioc';

export const createCategoryPipe = [
  body('name')
    .notEmpty()
    .withMessage('category name is required')
    .custom(async (name: string, { req }): Promise<boolean> => {
      const slug: string = slugify(name, { lower: true, strict: true });
      const category: CategoryInstance | null =
        await categoryService.findOne(slug);
      if (category) {
        throw new Error(`category slug ${slug} already exists`);
      }
      req.body.slug = slug;
      return true;
    }),
  body('parentId')
    .optional()
    .isNumeric()
    .withMessage('category parentId must be a number')
    .custom(async (parentId) => {
      const category: CategoryInstance | null =
        await categoryService.findByPk(parentId);
      if (!category) {
        throw new Error(`Cannot find category ${parentId}`);
      }
      return true;
    }),
  handleValidationErrorsMiddleware,
];
