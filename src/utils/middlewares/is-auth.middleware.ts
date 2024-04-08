import { NextFunction, Response } from 'express';
import { tokenService } from '../ioc/services.ioc';
export const isAuthMiddleware = (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const token: string | undefined = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(400).json({ message: 'Token is required' });
    return;
  }
  try {
    req.user = tokenService.verify(token);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
