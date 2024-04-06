import { UserRole } from '../../types/user-role.type';

export type UserDto = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  role: string;
};
