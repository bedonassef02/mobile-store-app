import { Payload } from './payload.dto';

export type AuthDto = {
  user: Payload;
  token: string;
};
