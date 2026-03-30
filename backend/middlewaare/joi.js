const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().required().min(3),
  category: Joi.string().valid('Work', 'Personal', 'Health', 'Learning', 'Finance').required(),
  priority: Joi.string().valid('Low', 'Medium', 'High').default('Medium'),
  status: Joi.string().valid('Pending', 'In Progress', 'Completed').default('Pending'),
  duedate: Joi.date().optional(),
  user: Joi.string().required()
});
const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  category: Joi.string().valid('Work', 'Personal', 'Health', 'Learning', 'Finance').optional(),
  priority: Joi.string().valid('Low', 'Medium', 'High').optional(),
  status: Joi.string().valid('Pending', 'In Progress', 'Completed').optional(),
  duedate: Joi.date().optional(),
  user: Joi.string().required()  // ← add this
});


module.exports = { createTaskSchema, updateTaskSchema };