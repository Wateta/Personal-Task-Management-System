const Joi=require('joi');
function todoValidation(data){
    const schema=Joi.object({
        title:Joi.string().min(4).required(),
        completed:Joi.boolean().default(false)
        
    });
    return schema.validate(data);
    
}
module.exports=todoValidation;