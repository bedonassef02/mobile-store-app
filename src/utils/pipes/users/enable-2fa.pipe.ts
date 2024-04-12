import { handleValidationErrorsMiddleware } from '../../error-handling/validation-error';
import { UserDto } from '../../dtos/users/user.dto';
import { authService, userService } from '../../ioc/services.ioc';
import { body } from 'express-validator';

export const enable2FAPipe = [
  body('password')
    .notEmpty()
    .withMessage('password required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .custom(async (password: string, { req }) => {
      const userId = req.user.id;

      const user: UserDto = await userService.findByPk(userId);

      const isAuth = await authService.signIn({ email: user.email, password });

      if (isAuth) {
        return true;
      }
      throw new Error('Password mismatch our records');
    }),

  handleValidationErrorsMiddleware,
];
