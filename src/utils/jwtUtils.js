require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (obj) => {
  const token = jwt.sign({ obj }, process.env.JWT_SECRET, {
    expiresIn: '30d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const { obj } = jwt.verify(token, process.env.JWT_SECRET);
    
    return obj;
  } catch (_error) {
    const error = new Error('Expired or invalid token');
    error.name = 'Unauthorized';
    throw error;
  }
};

module.exports = {
  createToken,
  validateToken,
};