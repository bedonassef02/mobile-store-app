import { body } from 'express-validator';
import { userService } from '../../ioc/services.ioc';

// Validate email format and normalize it
export const validateEmailFormat = body('email')
  .isEmail()
  .withMessage('Please provide a valid email address');

// Validate password complexity
export const validatePasswordComplexity = body('password')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters long');

// Check if the email is unique
export const checkEmailUniqueness = async (email: string) => {
  const existingUser = await userService.findByEmail(email);
  if (existingUser) {
    throw new Error(`Email address ${email} is already in use`);
  }
  return true;
};
