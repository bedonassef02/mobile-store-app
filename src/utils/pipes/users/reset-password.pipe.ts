import { body, query } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { validatePasswordComplexity } from './common';
import { redis } from '../../../config/redis.config';

export const resetPasswordPipe = [
  validatePasswordComplexity,

  body('email').notEmpty().withMessage('email is required'),

  body('token')
    .notEmpty()
    .withMessage('token is required')
    .isString()
    .custom(async (token, { req }) => {
      const email = req.body.email;
      const resetInfo = await redis.get(`reset-password-${email}`);
      let resetInfoObj: any;
      if (!resetInfo) {
        throw new Error('Invalid token');
      }
      console.log({ resetInfoObj });
      resetInfoObj = JSON.parse(resetInfo || '');
      if (!resetInfo || resetInfoObj.token !== token) {
        throw new Error('Token not found');
      } else if (resetInfoObj.expires < Date.now()) {
        throw new Error('Token expired');
      }
      return true;
    }),

  handleValidationErrorsMiddleware,
];
