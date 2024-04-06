import jwt from 'jsonwebtoken';
import { getSecretKey } from '../config/env-var';
import { Payload } from '../utils/dtos/payload.dto';

export class TokenService {
  private SECRET_KEY: string = '';
  private EXPIRES_IN: string | number = process.env.EXPIRES_IN || '1h';
  generate(payload: Payload): string {
    this.SECRET_KEY = getSecretKey();
    return jwt.sign(payload, this.SECRET_KEY, { expiresIn: this.EXPIRES_IN });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, this.SECRET_KEY);
    } catch (error) {
      return null;
    }
  }
}
