const BAD_REQUEST = 'Bad Request';
const UNAUTHORIZED = 'Unauthorized';
const CONFLICT = 'Conflict';

const errors = {
  [BAD_REQUEST]: 400,
  [UNAUTHORIZED]: 401,
  [CONFLICT]: 409,
};

const mapError = (type) => errors[type] || 500;

module.exports = mapError;