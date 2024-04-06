import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';
import { SignUpDto } from '../utils/dtos/auth/sign-up.dto';
import { SignInDto } from '../utils/dtos/auth/sign-in.dto';
import { TokenService } from './token.service';
import { Payload } from '../utils/dtos/auth/payload.dto';
import { createPayload } from '../utils/helpers/payload.helper';
import { UserDto } from '../utils/dtos/users/user.dto';
import { AuthDto } from '../utils/dtos/auth/auth.dto';

export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}

  private readonly SALT: number = 10;

  async signUp(signUpDto: SignUpDto): Promise<AuthDto> {
    signUpDto.password = await this.hashPassword(signUpDto.password);
    const user: UserDto = await this.userService.create(signUpDto);
    return this.generateResponse(user);
  }
  async signIn(signInDto: SignInDto): Promise<AuthDto | null> {
    const user: UserDto = await this.userService.findByEmail(signInDto.email);
    if (user && (await this.comparePassword(signInDto.password, user.password))) {
      return this.generateResponse(user);
    }
    return null;
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.SALT);
  }

  private async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  private generateResponse(user: UserDto): AuthDto {
    const payload: Payload = createPayload(user);
    const token = this.tokenService.generate(payload);
    return { user: payload, token };
  }
}
