export type UserDto = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  role: string;
  secret: string;
  twoFactorEnabled: boolean;
  passed2FA: boolean;
};
