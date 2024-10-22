//import mongoose
const mongoose = require('mongoose');

//Connection string
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/myRecipes';

//Connect to MongoDB
mongoose.connect(connectionString);

module.exports = mongoose.connection;