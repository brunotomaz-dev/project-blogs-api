const Joi = require('joi');

const authBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  authBodySchema,
};