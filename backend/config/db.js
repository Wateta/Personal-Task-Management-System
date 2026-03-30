const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is undefined! Check your .env file.');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error cannot connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
