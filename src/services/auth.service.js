const { User } = require('../models');
const { createToken } = require('../utils/jwtUtils');
const { authBodySchema } = require('./schemas/schema');
const jwtUtils = require('../utils/jwtUtils');

const validateBody = (body) => {
  const { error, value } = authBodySchema.validate(body);

  if (error) {
    const errorMessage = new Error('Some required fields are missing');
    errorMessage.name = 'Bad Request';
    
    throw errorMessage; 
  }
  
  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    const errorMessage = new Error('Invalid fields');
    errorMessage.name = 'Bad Request';
    
    throw errorMessage;
  }

  const { password: _, ...userWithoutPass } = user.dataValues;

  const token = createToken(userWithoutPass);

  return token;
};

const validateToken = (token) => {
  if (!token) {
    const errorMessage = new Error('Token not found');
    errorMessage.name = 'Unauthorized';
    
    throw errorMessage;
  }

  const isTokenValid = jwtUtils.validateToken(token);

  return isTokenValid;
};

module.exports = {
  validateBody,
  validateLogin,
  validateToken,
};