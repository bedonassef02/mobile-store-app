import { UserService } from './user.service';
import { SignUpDto } from '../utils/dtos/auth/sign-up.dto';
import { SignInDto } from '../utils/dtos/auth/sign-in.dto';
import { TokenService } from './token.service';
import { Payload } from '../utils/dtos/auth/payload.dto';
import { createPayload } from '../utils/helpers/payload.helper';
import { UserDto } from '../utils/dtos/users/user.dto';
import { AuthDto } from '../utils/dtos/auth/auth.dto';
import { signUpListener } from '../utils/events/sign-up.listener';
import { PasswordService } from './password.service';
import { MailService } from './mail.service';

export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<AuthDto> {
    signUpDto.password = await this.passwordService.hash(signUpDto.password);
    const user: UserDto = await this.userService.create(signUpDto);
    await signUpListener(user.id);
    await this.mailService.welcome(signUpDto.email);
    return this.generateResponse(user);
  }

  async findOrCreate(
    profile: any,
    email: string,
    provider: string = 'google',
  ): Promise<AuthDto> {
    let user: UserDto = await this.userService.findByEmail(email, provider);
    if (!user) {
      user = await this.userService.createOAuth(profile);
    }
    return this.generateResponse(user);
  }

  async signIn(signInDto: SignInDto): Promise<AuthDto | null> {
    const user: UserDto = await this.userService.findByEmail(signInDto.email);
    if (
      user &&
      (await this.passwordService.compare(signInDto.password, user.password))
    ) {
      await this.mailService.signIn(user.email);
      return this.generateResponse(user);
    }
    return null;
  }

  async changePassword(userId: number, password: string): Promise<AuthDto> {
    const hashedPassword = await this.passwordService.hash(password);
    const user: UserDto = await this.userService.update(userId, {
      password: hashedPassword,
    });
    await this.mailService.passwordChanged(user.email);
    return this.generateResponse(user);
  }

  generateResponse(user: UserDto): AuthDto {
    const payload: Payload = createPayload(user);
    const token: string = this.tokenService.generate(payload);
    return { user: payload, token };
  }
}
