const { handleValidationErrorsMiddleware } = require('../../error-handling/validation-error');
const { validateEmailFormat, validatePasswordComplexity } = require('./common');

exports.signInPipe = [validateEmailFormat, validatePasswordComplexity, handleValidationErrorsMiddleware];
