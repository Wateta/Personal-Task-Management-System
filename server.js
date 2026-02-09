require('dotenv').config();
const express=require('express');
const app=express();
const config=require('config');
const connectDB=require('./config/db');
const taskRoutes=require('./routes/taskRoutes');
const userRoutes=require('./routes/userRoutes');
const cors=require('cors');
const morgan=require('morgan');

console.log('MONGO_URI =', process.env.MONGO_URI);


connectDB();
app.use(express.json());
app.use(cors());
if(config.get('env')==='development'){
    app.use(morgan('dev'));
}
app.use('/api/tasks',taskRoutes);
app.use('/api/users',userRoutes);
const PORT=config.get('port');
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
