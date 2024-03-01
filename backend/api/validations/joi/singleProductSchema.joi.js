const Joi = require('joi');

const singleProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  brand: Joi.string(),
  model: Joi.string(),
  color: Joi.string(),
  details: Joi.object({
    brand: Joi.string().required(),
    model: Joi.string().required(),
    color: Joi.string().required(),
  }),
})
  .xor('color', 'details')
  .or('brand', 'details')
  .or('model', 'details');

module.exports = singleProductSchema;
