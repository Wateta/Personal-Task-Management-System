const Joi=require('joi');
const userRegisterSchema=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),

});
module.exports={
    userRegisterSchema,
}