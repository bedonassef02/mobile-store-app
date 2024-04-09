import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { orderController } from '../utils/ioc/controllers.ioc';
import { createCartProductPipe } from '../utils/pipes/order/create-order.pipe';
import { orderMiddleware } from '../utils/middlewares/order.middleware';

export const router: Router = Router();

router.use(isAuthMiddleware);
router
  .route('/')
  .get(orderController.findAll.bind(orderController))
  .post(createCartProductPipe, orderController.create.bind(orderController));

router
  .route('/:id')
  .get(orderMiddleware, orderController.findOne.bind(orderController));
