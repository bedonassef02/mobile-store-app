import crypto from 'node:crypto';
import { UserService } from './user.service';

const userService = new UserService();

export class AuthService {
  async signUp(signUpDto:any) {
    // signUpDto.password = crypto.hash('sha1', signUpDto.password);
    const user = await userService.create({ ...signUpDto });
    return user;
  }
  async signIn(signInDto:any) {
    // const user = await userService.signIn({ ...signInDto });
    // return user;
  }
}