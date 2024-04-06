import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';
import { SignUpDto } from '../utils/dtos/sign-up.dto';
import { SignInDto } from '../utils/dtos/sign-in.dto';

const userService = new UserService();

export class AuthService {
  private readonly SALT: number = 10;
  async signUp(signUpDto: SignUpDto) {
    signUpDto.password = await bcrypt.hash(signUpDto.password, this.SALT);
    const user = await userService.create(signUpDto);
    return user;
  }
  async signIn(signInDto: SignInDto) {
    const user = await userService.findByEmail(signInDto.email);
    // return user;
  }
}
