import { SignUpDto } from '../utils/dtos/auth/sign-up.dto';
import { User } from '../models/user.model';

export class UserService {
  async findOne(id: number) {
    return await User.findByPk(id);
  }
  async create(signUpDto: SignUpDto) {
    return await User.create(signUpDto);
  }

  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }
}
