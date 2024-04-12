import { body } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';

export const verify2FAPipe = [
  body('otp')
    .notEmpty()
    .withMessage('OTP is required')
    .isNumeric()
    .withMessage('OTP must be a number'),

  handleValidationErrorsMiddleware,
];
