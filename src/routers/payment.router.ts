import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { paymentController } from '../utils/ioc/controllers.ioc';
export const router: Router = Router();

// TODO: handle only pending orders.json
router
  .route('/:orderId')
  .post(isAuthMiddleware, paymentController.create.bind(paymentController));

router.get('/success', paymentController.success.bind(paymentController));
router.get('/cancel', paymentController.cancel.bind(paymentController));
