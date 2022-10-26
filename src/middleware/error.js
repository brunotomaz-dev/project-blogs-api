const mapError = require('../utils/errorMap');

const error = (err, req, res, _next) => {
  const status = mapError(err.name);
  const message = err.message || 'unexpected error';

  return res.status(status).json({ message });
};

module.exports = error;