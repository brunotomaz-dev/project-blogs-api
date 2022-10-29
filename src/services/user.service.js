const { User } = require('../models');
const { validateNewUserData } = require('./schemas/schema');
const { newError } = require('./validations/newError');

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = validateNewUserData.validate({ displayName, email, password });
  if (error) {
    error.name = 'Bad Request';
    throw error;
  }

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, password, image },
  });
  
  if (!created) {
    newError('Conflict', 'User already registered');
  }
  
  return user;
};

const getAll = async () => {
  const getAllUsers = await User.findAll({ attributes: { exclude: 'password' } });

  return getAllUsers;
};

const findById = async ({ id }) => {
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });

  if (!user) {
    newError('Not Found', 'User does not exist');
  }

  return user;
};

module.exports = {
  createUser,
  getAll,
  findById,
};