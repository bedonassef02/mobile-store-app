import { body } from 'express-validator';
import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { passwordService, userService } from '../../ioc/services.ioc';
import { UserDto } from '../../dtos/users/user.dto';

export const changePasswordPipe = [
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .custom(async (password, { req }) => {
      const userId = req.user.id;
      const user: UserDto = await userService.findOne(userId);
      if (!await passwordService.compare(password, user.password)) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

  body('newPassword')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),

  handleValidationErrorsMiddleware,
];
