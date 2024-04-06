const { body } = require('express-validator');
const userService = require('../../../services/user.service');

// Validate email format and normalize it
exports.validateEmailFormat = body('email')
  .isEmail()
  .withMessage('Please provide a valid email address')
  .normalizeEmail();

// Validate password complexity
exports.validatePasswordComplexity = body('password')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters long');

// Check if the email is unique
exports.checkEmailUniqueness = async (email) => {
  const existingUser = await userService.findByEmail(email);
  if (existingUser) {
    throw new Error(`Email address ${email} is already in use`);
  }
  return true;
};
