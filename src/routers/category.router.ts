import { Router } from 'express';
import { createCategoryPipe } from '../utils/pipes/categories/create-category.pipe';
import { deleteCategoryPipe } from '../utils/pipes/categories/delete-category.pipe';
import { updateCategoryPipe } from '../utils/pipes/categories/update-category.pipe';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { categoryController } from '../utils/ioc/controllers.ioc';
import { roleGuard } from '../utils/guards/role.guard';
import { UserRole } from '../utils/types/user-role.type';
import { twoFAMiddleware } from '../utils/middlewares/2fa.middleware';
import { isUserUpdatedMiddleware } from '../utils/middlewares/is-user-updated.middleware';

export const router: Router = Router();

router
  .route('/')
  .get(categoryController.findAll.bind(categoryController))
  .post(
    isAuthMiddleware,
    isUserUpdatedMiddleware,
    twoFAMiddleware,
    roleGuard([UserRole.ADMIN, UserRole.EDITOR]),
    createCategoryPipe,
    categoryController.create.bind(categoryController),
  );

router.route('/:slug').get(categoryController.findOne.bind(categoryController));

router
  .route('/:id')
  .patch(
    isAuthMiddleware,
    isUserUpdatedMiddleware,
    twoFAMiddleware,
    roleGuard([UserRole.ADMIN, UserRole.EDITOR]),
    updateCategoryPipe,
    categoryController.update.bind(categoryController),
  )
  .delete(
    isAuthMiddleware,
    isUserUpdatedMiddleware,
    twoFAMiddleware,
    roleGuard([UserRole.ADMIN]),
    deleteCategoryPipe,
    categoryController.delete.bind(categoryController),
  );

router
  .route('/:slug/subcategories')
  .get(categoryController.findSubcategoriesBySlug.bind(categoryController));
