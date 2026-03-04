const Task=require('../models/task');
const {updateTaskSchema,createTaskSchema}=require('../middlewaare/joi');
const getAllTasks=async(req,res)=>{
    try{
const tasks = await Task.find({ user: req.user._id }).populate('user', 'name');
    res.json(tasks);
    console.log(tasks);
    }
    catch(err){
 res.status(500).json({message:'server Error'});
    }
    
};
const getTaskById=async(req,res)=>{
    try{
const task=await  Task.findById(req.params.id).populate('user','name ');
 if(!task){
        return res.status(404).json({message:"Task not found"});
    }
    res.json(task);
    }
    catch(err){
        res.status(500).json({message:'server Error'});
    }
   
}
const createTask=async(req,res)=>{
    const {title,category,priority,status,duedate,user}=req.body;
    const {error,value}=createTaskSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    const task=await Task.create({
        title:value.title,
        category:value.category,
        priority:value.priority,
        status:value.status,
        duedate:value.duedate,
        user:req.user ? req.user._id:value.user
    });
    res.status(201).json(task);
};
const updateTask=async(req,res)=>{
    const {title,category,priority,status,duedate,user}=req.body;
    const {error,value}=updateTaskSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
     const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const updated = await Task.findByIdAndUpdate(req.params.id, value, { new: true });
  res.json(updated);
};
const deleteTask=async(req,res)=>{
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json({ message: 'Task deleted successfully' });
}
module.exports={
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};