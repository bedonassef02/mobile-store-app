import { NextFunction, Response } from 'express';
export const twoFAMiddleware = (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;
  if (user.twoFactorEnabled && !user.passed2FA) {
    return res.status(401).json({ message: 'you must be pass 2FA' });
  }
  next();
};
