const Task=require('../models/task');
const {updateTaskShma,createTaskSchema, updateTaskSchema}=require('../middlewaare/joi');
const getAllTasks=async(req,res)=>{
    try{
const tasks=await Task.find().populate('user','name ');
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
    const {name,description,TaskDate,status}=req.body;
    const {error,value}=createTaskSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    const task=await Task.create({
        name:value.name,
        description:value.description,
        TaskDate:value.TaskDate,
        status:value.status,
        user:req.user ? req.user._id:value.user
    });
    res.status(201).json(task);
};
const updateTask=async(req,res)=>{
    const {name,description,TaskDate,status}=req.body;
    const {error,value}=updateTaskSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    const task=await Task.findByIdAndUpdate(req.params.id,value,{new:true});
    res.json(task);
};
const deleteTask=async(req,res)=>{
    const deletedTask=await Task.findByIdAndDelete(req.params.id);
    if(!deletedTask){
        return res.status(404).json({message:'Task not found'});
    }
    res.json( {message:"Task deleted successfully"});
}
module.exports={
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};