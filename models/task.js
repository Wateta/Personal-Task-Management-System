const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    category:{
  type:String,
  enum: ['Work', 'Personal', 'Health', 'Learning', 'Finance'],
   required: true
    },
    priority:{
      type:String,
      enum:['low','medium','high'],
      default:'medium'
      
    },
     status:{
      type:String,
      enum:['Pending','In Progress','Completed'],
      default:'Pending'
    },
    
    duedate: {
      type: Date
    },
    
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true 
  }
);

module.exports = mongoose.model('Task', taskSchema);
