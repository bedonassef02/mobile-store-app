import jwt from 'jsonwebtoken';
import { getSecretKey } from '../config/env-var';
import { Payload } from '../utils/dtos/auth/payload.dto';

export class TokenService {
  private SECRET_KEY: string = getSecretKey();
  private EXPIRES_IN: string | number = process.env.EXPIRES_IN || '1h';

  generate(payload: Payload): string {
    return jwt.sign(payload, this.SECRET_KEY, { expiresIn: this.EXPIRES_IN });
  }

  verify(token: string): any | null {
    return jwt.verify(token, this.SECRET_KEY);
  }
}
