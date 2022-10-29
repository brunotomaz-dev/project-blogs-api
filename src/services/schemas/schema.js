const Joi = require('joi');

const authBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateNewUserData = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.required': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  'string.email': '{{#label}} must be a valid email',
});

module.exports = {
  authBodySchema,
  validateNewUserData,
};