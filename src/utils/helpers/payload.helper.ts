import { Payload } from '../dtos/auth/payload.dto';
import { UserDto } from '../dtos/users/user.dto';

export const createPayload = (UserDto: UserDto): Payload => {
  return {
    id: UserDto.id,
    email: UserDto.email,
    role: UserDto.role,
  };
};
