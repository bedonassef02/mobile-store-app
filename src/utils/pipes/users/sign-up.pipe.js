const { body } = require('express-validator');
const { handleValidationErrorsMiddleware } = require('../../error-handling/validation-error');
const { validateEmailFormat, validatePasswordComplexity, checkEmailUniqueness } = require('./common');

exports.signUpPipe = [
  body('name')
    .notEmpty()
    .withMessage('Please provide a name')
    .isLength({ max: 32 })
    .withMessage('Name must be less than 32 characters'),

  validateEmailFormat.custom(checkEmailUniqueness),

  validatePasswordComplexity,

  handleValidationErrorsMiddleware,
];
