import express from "express";
// import morgan from 'morgan';
import {notFoundException} from './utils/exceptions/404.exception';
import {handleException} from './utils/exceptions/handle.exception';

export const setupExpressApp = () => {
  const app = express();

  app.use(express.json());

  // app.use(morgan('dev'));

  app.use('/auth', require('./routers/user.router'));

  app.use(notFoundException);

  app.use(handleException);

  return app;
};
