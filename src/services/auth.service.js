const { User } = require('../models');
const { createToken } = require('../utils/jwtUtils');
const { authBodySchema } = require('./schemas/schema');
const { newError } = require('./validations/newError');

const jwtUtils = require('../utils/jwtUtils');

const validateBody = (body) => {
  const { error, value } = authBodySchema.validate(body);

  if (error) {
    newError('Bad Request', 'Some required fields are missing');
  }
  
  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    newError('Bad Request', 'Invalid fields');
  }

  const { password: _, ...userWithoutPass } = user.dataValues;

  const token = createToken(userWithoutPass);

  return token;
};

const validateToken = (token) => {
  if (!token) {
    newError('Unauthorized', 'Token not found');
  }

  const isTokenValid = jwtUtils.validateToken(token);
  
  return isTokenValid;
};

module.exports = {
  validateBody,
  validateLogin,
  validateToken,
};