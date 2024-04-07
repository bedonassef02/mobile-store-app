import { body } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { validatePasswordComplexity } from './common';

export const signInPipe = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  validatePasswordComplexity,
  handleValidationErrorsMiddleware,
];
