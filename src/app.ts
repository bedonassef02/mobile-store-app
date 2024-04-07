import express, { Express } from 'express';
import morgan from 'morgan';
import { notFoundException } from './utils/exceptions/404.exception';
import { handleException } from './utils/exceptions/handle.exception';
import { router as authRouter } from './routers/auth.router';
import { router as categoryRouter } from './routers/category.router';
import { router as productRouter } from './routers/product.router';

export const setupExpressApp = () => {
  const app: Express = express();

  app.use(express.json());

  app.use(morgan('dev'));

  app.use('/auth', authRouter);
  app.use('/categories', categoryRouter);
  app.use('/products', productRouter);

  app.use(notFoundException);

  app.use(handleException);

  return app;
};
