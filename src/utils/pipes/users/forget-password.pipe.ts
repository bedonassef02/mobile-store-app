import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { checkEmailUniqueness, validateEmailFormat } from './common';

export const forgetPasswordPipe = [
  validateEmailFormat.custom(checkEmailUniqueness),

  handleValidationErrorsMiddleware,
];
