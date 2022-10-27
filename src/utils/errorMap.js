const BAD_REQUEST = 'Bad Request';
const UNAUTHORIZED = 'Unauthorized';
const CONFLICT = 'Conflict';
const NOT_FOUND = 'Not Found';

const errors = {
  [BAD_REQUEST]: 400,
  [UNAUTHORIZED]: 401,
  [NOT_FOUND]: 404,
  [CONFLICT]: 409,
};

const mapError = (type) => errors[type] || 500;

module.exports = mapError;