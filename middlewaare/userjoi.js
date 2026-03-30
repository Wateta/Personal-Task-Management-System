const Joi = require('joi');

const userRegisterSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6)
});

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const userVerifySchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required().length(6)
});

module.exports = { userRegisterSchema, userLoginSchema, userVerifySchema };