import { body } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import {
  validateEmailFormat,
  validatePasswordComplexity,
  checkEmailUniqueness,
} from './common';

export const signUpPipe = [
  body('name')
    .notEmpty()
    .withMessage('Please provide a name')
    .isLength({ max: 32 })
    .withMessage('Name must be less than 32 characters'),

  validateEmailFormat.custom(checkEmailUniqueness),

  validatePasswordComplexity,

  handleValidationErrorsMiddleware,
];
