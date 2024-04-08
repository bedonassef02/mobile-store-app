import express, { Express } from 'express';
import morgan from 'morgan';
import { notFoundException } from './utils/exceptions/404.exception';
import { handleException } from './utils/exceptions/handle.exception';
import { router as authRouter } from './routers/auth.router';
import { router as categoryRouter } from './routers/category.router';
import { router as productRouter } from './routers/product.router';
import { router as wishlistRouter } from './routers/wishlist.router';
import { router as cartRouter } from './routers/cart.router';
import { router as orderRouter } from './routers/order.router';
import { router as paymentRouter } from './routers/payment.router';
import path from 'node:path';

export const setupExpressApp = () => {
  const app: Express = express();

  app.use(express.json());

  app.use(morgan('dev'));

  const parentDir = path.resolve(__dirname, '..');
  app.use(express.static(path.join(parentDir, 'public')));

  app.use('/auth', authRouter);
  app.use('/categories', categoryRouter);
  app.use('/products', productRouter);
  app.use('/wishlist', wishlistRouter);
  app.use('/cart', cartRouter);
  app.use('/order', orderRouter);
  app.use('/payment', paymentRouter);

  app.use(notFoundException);

  app.use(handleException);

  return app;
};
