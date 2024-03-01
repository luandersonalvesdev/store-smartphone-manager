const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().required().alphanum()
    .min(3)
    .max(255)
    .required(),
  password: Joi.string().min(5).max(255).required(),
});

module.exports = loginSchema;
