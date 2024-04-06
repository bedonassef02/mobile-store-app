const { User } = require('../models/user.model');

exports.create = async (user) => {
  return await User.create({ ...user });
};

exports.findOne = async (id) => {
  return await User.findByPk(id);
};

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};
