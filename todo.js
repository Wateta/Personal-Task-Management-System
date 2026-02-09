const express=require('express');
const Joi=require('joi');
const app=express();
const cors=require('cors');
app.use(cors());

app.use(express.json());
let todos=[{
    id:1,
title:"",
completed:false}];
const todoValidation=require('./joi2');
let nextId=2;
app.post('/api/todos',(req,res)=>{
    
    
    const {error,value}=todoValidation(req.body)
 if(error){
    return  res.status(400).json({error: error.details[0].message});
 }
 const newTodo={
        id:nextId++,
       ...value
    };
todos.push(newTodo);
res.status(201).json(newTodo);

});
app.get('/api/todos',(req,res)=>{
    const {completed}=req.query;
    if(completed===undefined){
      return res.json(todos);
    }
   // Convert string to boolean
  const isCompleted = completed === 'true';

  const filteredTodos = todos.filter(
    todo => todo.completed === isCompleted
  );
   res.json(filteredTodos);
})
app.patch('/api/todos/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const activity=todos.find((todo)=>{
        return  todo.id===id;
    });
    if(!activity){
         return res.status(404).json({error:"Activity not found"})
    }
     
 const {error,value}=todoValidation(req.body)
 if(error){
    return  res.status(400).json({error: error.details[0].message});
 }
if(value.title!==undefined){
activity.title=value.title;
}
if(value.completed!==undefined){
    activity.completed=value.completed;
}
res.status(200).json(activity);
})
app.delete('/api/todos/:id',(req,res)=>{
     const id=parseInt(req.params.id);
    const activity=todos.find((todo)=>{
        return  todo.id===id;
    });
    if(!activity){
         return res.status(404).json({error:"Activity not found"})
    }
    todos=todos.filter((todo)=>{
         return todo.id!==id});
     return res.status(200).json({ message: "Todo deleted successfully" });
})
console.log("Current todos on server:", todos);

app.listen(4000,()=>{
    console.log('server running on port 4000');
});
