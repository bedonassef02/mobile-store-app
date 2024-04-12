import { SignUpDto } from '../utils/dtos/auth/sign-up.dto';
import { User } from '../models/user.model';
import { signUpListener } from '../utils/events/sign-up.listener';
import { UpdateUserDto } from '../utils/dtos/users/update-user.dto';

export class UserService {
  async findOne(id: number): Promise<any> {
    return await User.findByPk(id);
  }

  async findByPk(id: number): Promise<any> {
    return await User.findOne({
      where: { id },
      attributes: [
        'id',
        'name',
        'email',
        'phone',
        'image',
        'role',
        'twoFactorEnabled',
        'secret',
        'updatedAt',
      ],
    });
  }

  async create(signUpDto: SignUpDto): Promise<any> {
    const user: any = await User.create(signUpDto);
    await signUpListener(user.id);
    return user;
  }

  async createOAuth(profile: any): Promise<any> {
    const { email, name, sub, provider } = profile;

    return User.create({ email, name, provider, providerId: sub });
  }

  async findByEmail(email: string, provider: string = 'local'): Promise<any> {
    return await User.findOne({ where: { email, provider } });
  }

  async update(userId: number, updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.findOne(userId);
    user.update(updateUserDto);
    user.save();
    return user;
  }
}
