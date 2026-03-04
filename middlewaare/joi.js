const Joi=require('joi');
const createTaskSchema=Joi.object({
    title:Joi.string().required().min(3),
    category:Joi.string().required(),
    priority:Joi.string().valid('Low','Medium','High').default('medium'),
    duedate:Joi.date().optional(),
    status:Joi.string().valid('Pending','In Progress','Completed').default('Pending'),
     user: Joi.string().required()
});

const updateTaskSchema=Joi.object({
    name:Joi.string().required().min(3),
    description:Joi.string().optional(),
    TaskDate:Joi.date().optional(),
    status:Joi.string().valid('Pending','In Progress','Completed').optional(),
     user: Joi.string().required()
});
module.exports={
    createTaskSchema,
    updateTaskSchema,
}