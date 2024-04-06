const userService = require('../services/user.service');

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userService.signUp({ name, email, password });
  res.status(201).json(user);
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.signIn({ email, password });
  res.status(200).json(user);
};
