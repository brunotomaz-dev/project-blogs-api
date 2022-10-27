const { User } = require('../models');
const { validateNewUserData } = require('./schemas/schema');

const createUser = async ({ displayName, email, password, image }) => {
  // validar dados
  const { error } = validateNewUserData.validate({ displayName, email, password });
  if (error) {
    error.name = 'Bad Request';
    throw error;
  }
 // verifica se já existe
//   const userExists = await User.findOne({ where: { email } });
//   if (userExists) {
//     const userError = new Error('User already registered');
//     userError.name = 'Confilct';
//     throw userError;
//   }
//  // cadastra se não existe
//   User.create({ displayName, email, password, image });

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, password, image },
  });
  
  if (!created) {
    const createError = new Error('User already registered');
    createError.name = 'Conflict';
    throw createError;
  }
  
  return user.dataValues;
};

module.exports = {
  createUser,
};