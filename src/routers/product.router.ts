import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { createProductPipe } from '../utils/pipes/products/create-product.pipe';
import { updateProductPipe } from '../utils/pipes/products/update-product.pipe';
import { deleteProductPipe } from '../utils/pipes/products/delete-product.pipe';
import { multerErrorHandler } from '../utils/error-handling/multer-error.handler';
import { productController } from '../utils/ioc/controllers.ioc';
import { roleGuard } from '../utils/guards/role.guard';
import { UserRole } from '../utils/types/user-role.type';
import { uploadImagesMiddleware } from '../utils/middlewares/images.middleware';
import { twoFAMiddleware } from '../utils/middlewares/2fa.middleware';
import { isUserUpdatedMiddleware } from '../utils/middlewares/is-user-updated.middleware';

export const router: Router = Router();

router
  .route('/')
  .get(productController.findAll.bind(productController))
  .post(
    isAuthMiddleware,
    isUserUpdatedMiddleware,
    twoFAMiddleware,
    roleGuard([UserRole.ADMIN, UserRole.EDITOR]),
    uploadImagesMiddleware,
    multerErrorHandler,
    createProductPipe,
    productController.create.bind(productController),
  );

router.route('/:id').get(productController.findOne.bind(productController));

router
  .route('/:id')
  .patch(
    isAuthMiddleware,
    isUserUpdatedMiddleware,
    twoFAMiddleware,
    roleGuard([UserRole.ADMIN, UserRole.EDITOR]),
    updateProductPipe,
    productController.update.bind(productController),
  )
  .delete(
    isAuthMiddleware,
    isUserUpdatedMiddleware,
    twoFAMiddleware,
    roleGuard([UserRole.ADMIN]),
    deleteProductPipe,
    productController.delete.bind(productController),
  );
