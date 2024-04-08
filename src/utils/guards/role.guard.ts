import { NextFunction, Response } from 'express';

export const roleGuard =
  (roles: string[]) =>
  (req: any, res: Response, next: NextFunction): void => {
    const role: string = req.user.role;
    if (!roles.includes(role)) {
      res.status(401).json({ message: `you are not authorized` });
    } else {
      next();
    }
  };
