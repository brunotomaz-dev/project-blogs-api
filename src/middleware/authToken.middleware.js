const authService = require('../services/auth.service');

const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  const user = authService.validateToken(authorization);
  
  req.user = user;

  next();
};

module.exports = {
  authToken,
};