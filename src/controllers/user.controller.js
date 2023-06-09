const authService = require('../services/auth.service');
const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { email, password } = await userService.createUser(req.body);
  
  const token = await authService.validateLogin({ email, password });

  res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const allUsers = await userService.getAll();

  res.status(200).json(allUsers);
};

const findById = async (req, res) => {
  const user = await userService.findById(req.params);

  res.status(200).json(user);
};

module.exports = {
  createUser,
  getAll,
  findById,
};