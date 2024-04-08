import { SignUpDto } from '../utils/dtos/auth/sign-up.dto';
import { User } from '../models/user.model';
import { eventEmitter } from '../utils/events';

export class UserService {
  async findOne(id: number): Promise<any> {
    return await User.findByPk(id);
  }

  async create(signUpDto: SignUpDto): Promise<any> {
    const user: any = await User.create(signUpDto);
    eventEmitter.emit('user.created', user.id);
    return user;
  }

  async findByEmail(email: string): Promise<any> {
    return await User.findOne({ where: { email } });
  }
}
