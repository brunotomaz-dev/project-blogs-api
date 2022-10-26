const BAD_REQUEST = 'bad request';

const errors = {
  [BAD_REQUEST]: 400,
};

const mapError = (type) => errors[type] || 500;

module.exports = mapError;