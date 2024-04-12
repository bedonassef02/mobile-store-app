import { NextFunction, Response } from 'express';
import { UserDto } from '../dtos/users/user.dto';
import { userService } from '../ioc/services.ioc';

export const isUserUpdatedMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;
  const dbUser = await userService.findByPk(user.id);
  if (isUpdated(user, dbUser)) {
    return res.status(401).json({ message: 'you must refresh token' });
  }
  next();
};

const isUpdated = (user: any, dbUser: UserDto) => {
  const lastUpdate: number = dbUser.updatedAt.getTime() / 1000;
  if (lastUpdate > user.iat) {
    return true;
  }
  return false;
};
