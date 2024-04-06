import { SignUpDto } from "../utils/dtos/sign-up.dto";

const { User } = require('../models/user.model');

export class UserService {
  async findOne(id:number) {
    return await User.findByPk(id);
  }
  async create(signUpDto:SignUpDto) {
    return await User.create(signUpDto);
  }

  async findByEmail(email:string) {
    return await User.findOne({ where: { email } });
  }
}