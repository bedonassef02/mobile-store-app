import { UserService } from '../services/user.service';
import { Response } from 'express';
import { UpdateUserDto } from '../utils/dtos/users/update-user.dto';

export class UserController {
  constructor(private userService: UserService) {}

  async findOne(req: any, res: Response) {
    const userId: number = req.user.id;
    const user = await this.userService.findByPk(userId);
    res.status(200).json(user);
  }

  async update(req: any, res: Response) {
    const userId: number = req.user.id;
    const updateUserDto: UpdateUserDto = req.body;
    await this.userService.update(userId, updateUserDto);
    res.status(200).json({ message: 'Updated successfully' });
  }
}
