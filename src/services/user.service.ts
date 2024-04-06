const { User } = require('../models/user.model');

export class UserService {
  async findOne(id:number) {
    return await User.findByPk(id);
  }
  async create(user:any) {
    return await User.create({ ...user });
  }

  async findByEmail(email:string) {
    return await User.findOne({ where: { email } });
  }
}