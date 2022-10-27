const { User } = require('../models');
const { validateNewUserData } = require('./schemas/schema');

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
    const createError = new Error('User already registered');
    createError.name = 'Conflict';
    throw createError;
  }
  
  return user;
};

const getAll = async () => {
  const getAllUsers = await User.findAll({ attributes: { exclude: 'password' } });

  return getAllUsers;
};

const findById = async ({ id }) => {
  const user = await User.findByPk(id);

  if (!user) {
    const error = new Error('User does not exist');
    error.name = 'Not Found';
    throw error;
  }

  return user;
};

module.exports = {
  createUser,
  getAll,
  findById,
};