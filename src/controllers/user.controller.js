const authService = require('../services/auth.service');
const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { email, password } = await userService.createUser(req.body);
  
  const token = await authService.validateLogin({ email, password });

  res.status(201).json({ token });
};

module.exports = {
  createUser,
};