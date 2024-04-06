const crypto = require('node:crypto');

const userService = require('./user.service');
exports.signUp = async ({ name, email, password }) => {
  const hashedPassword = crypto.hash('sha1', password);
  const user = await userService.create({ name, email, password: hashedPassword });
  return user;
};

exports.signIn = async ({ email, password }) => {};
