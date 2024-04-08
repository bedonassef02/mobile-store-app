import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { createProductPipe } from '../utils/pipes/products/create-product.pipe';
import { updateProductPipe } from '../utils/pipes/products/update-product.pipe';
import { deleteProductPipe } from '../utils/pipes/products/delete-product.pipe';
import { upload } from '../config/multer.config';
import { multerErrorHandler } from '../utils/error-handling/multer-error.handler';
import { productController } from '../utils/ioc/controllers.ioc';
import { roleGuard } from '../utils/guards/role.guard';
import { UserRole } from '../utils/types/user-role.type';

export const router: Router = Router();

const uploadImagesMiddleware = upload.fields([
  { name: 'coverImage', maxCount: 1 },
  { name: 'images', maxCount: 10 },
]);

router
  .route('/')
  .get(productController.findAll.bind(productController))
  .post(
    isAuthMiddleware,
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
    roleGuard([UserRole.ADMIN, UserRole.EDITOR]),
    updateProductPipe,
    productController.update.bind(productController),
  )
  .delete(
    isAuthMiddleware,
    roleGuard([UserRole.ADMIN]),
    deleteProductPipe,
    productController.delete.bind(productController),
  );
