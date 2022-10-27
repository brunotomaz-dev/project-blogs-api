const authService = require('../services/auth.service');

const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  const data = authService.validateToken(authorization);

  req.user = data;

  next();
};

module.exports = {
  authToken,
};