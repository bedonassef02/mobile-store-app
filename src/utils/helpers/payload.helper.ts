import { Payload } from '../dtos/auth/payload.dto';
import { UserDto } from '../dtos/users/user.dto';

export const createPayload = (
  userDto: UserDto,
  passed2FA: boolean = false,
): Payload => {
  return {
    id: userDto.id,
    email: userDto.email,
    role: userDto.role,
    twoFactorEnabled: userDto.twoFactorEnabled,
    passed2FA,
  };
};
