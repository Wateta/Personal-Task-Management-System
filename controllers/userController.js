const {userRegisterSchema} = require('../middlewaare/userjoi');
const User=require('../models/Users');
const getAllUsers=async(req,res)=>{
    const users=await User.find();
    res.json(users);
};
const getUserById=async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.json(user);
}
const createUser=async(req,res)=>{
    const {name,email}=req.body;
    const {error,value}=userRegisterSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    const user=await User.create({
        name:value.name,
        email:value.email
    });
    res.status(201).json(user);
}
const updateUser=async(req,res)=>{
    const {name,email}=req.body;
    const {error,value}=userRegisterSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    const user=await User.findByIdAndUpdate(req.params.id,value,{new:true});
    res.json(user);
}
const deleteUser=async(req,res)=>{
    const deletedUser=await User.findByIdAndDelete(req.params.id);
    res.json({message:"User deleted successfully"});
}
module.exports={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};