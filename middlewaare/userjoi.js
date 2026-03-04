const Joi = require('joi');

const userRegisterSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6)  // ← add this
});

module.exports = { userRegisterSchema };