import { NextFunction, Response } from 'express';
import { tokenService, userService } from '../ioc/services.ioc';
export const TwoFAMiddleware = (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const userId: number = req.user.id;

  res.status(401).json({ message: 'Invalid token' });
};
