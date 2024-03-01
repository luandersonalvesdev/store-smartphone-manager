const Joi = require('joi');

const multipleProductSchema = Joi.array().items(Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  data: Joi.array().items(Joi.object({
    price: Joi.number().required(),
    color: Joi.string().required(),
  })),
}));

module.exports = multipleProductSchema;
