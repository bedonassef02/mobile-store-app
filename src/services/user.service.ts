import { SignUpDto } from '../utils/dtos/auth/sign-up.dto';
import { User } from '../models/user.model';
import { signUpListener } from '../utils/events/sign-up.listener';

export class UserService {
  async findOne(id: number): Promise<any> {
    return await User.findByPk(id);
  }

  async create(signUpDto: SignUpDto): Promise<any> {
    const user: any = await User.create(signUpDto);
    await signUpListener(user.id);
    return user;
  }

  async createOAuth(profile: any): Promise<any> {
    const { email, name, sub } = profile._json;
    const provider: string = 'google';

    return User.create({ email, name, provider, providerId: sub });
  }

  async findByEmail(email: string): Promise<any> {
    return await User.findOne({ where: { email } });
  }
}
