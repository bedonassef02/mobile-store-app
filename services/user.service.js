const { User } = require("../models/user.model");

exports.create = async ({ name, email, password }) => {
  return await User.create({ name, email, password });
};
