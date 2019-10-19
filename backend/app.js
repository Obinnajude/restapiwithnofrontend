const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const Recipes = require('./models/recipes');
const recipeRoutes = require('./routes/route');

mongoose.connect('mongodb+srv://root:root@obinnadb-fik9x.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
  console.log(chalk.blue('Connected to the Database'));
}).catch((error)=>{
  console.log(error);
});

const app = express();
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','Origin,x-Requested-With,Content,Accept,Accept,Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
  next();
});

app.use('/api/recipes',recipeRoutes);

module.exports = app;