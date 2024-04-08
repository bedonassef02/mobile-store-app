import { Router } from 'express';
import { createCategoryPipe } from '../utils/pipes/categories/create-category.pipe';
import { deleteCategoryPipe } from '../utils/pipes/categories/delete-category.pipe';
import { updateCategoryPipe } from '../utils/pipes/categories/update-category.pipe';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { categoryController } from '../utils/ioc/controllers.ioc';

export const router: Router = Router();

router
  .route('/')
  .get(categoryController.findAll.bind(categoryController))
  .post(
    isAuthMiddleware,
    createCategoryPipe,
    categoryController.create.bind(categoryController),
  );

router.route('/:slug').get(categoryController.findOne.bind(categoryController));

router
  .route('/:id')
  .patch(
    isAuthMiddleware,
    updateCategoryPipe,
    categoryController.update.bind(categoryController),
  )
  .delete(
    isAuthMiddleware,
    deleteCategoryPipe,
    categoryController.delete.bind(categoryController),
  );

router
  .route('/:slug/subcategories')
  .get(categoryController.findSubcategoriesBySlug.bind(categoryController));
