const config=require('config')
const log=require('./logger')
const express = require("express");
const app = express();
const routes=require('./routes/routes')
const Joi = require("joi");
const startupdebugger=require("debug")("app:startup");
const dbdebugger=require('debug')("app:db")
const greetingroutes=require('./routes/greeting')

// Examples on configurations
console.log("APP name : "+config.get('name'));
console.log("Mail server : "+config.get('mail.host'));


// IN APP we have methods like get post put delete
// ('/') inside app.get() so this is how you define route


// This express.json() is a middleware function and it will check whether request
//  body has json then it will parse the req body in json
app.use(express.json());

// This is also a middleware function
// This will help in getting values from key and value approach 
app.use(express.urlencoded());

/**
 * Printing the environment in the console
 */
if(process.env.NODE_ENV==='development'){
console.log('development environment')
startupdebugger("development environment")
}else{
  console.log("production environment")
startupdebugger("production environment")

}

dbdebugger("connected to database")

// From this middleware we can serve the static files in the public folder
app.use(express.static('public'))


// app.use('/api/name',routes)
// app.use('/api/names',routes)

app.use('/api/greeting',greetingroutes)

app.get("/", (req, res) => {
  res.send("Hello World");
});


const port = process.env.PORT||3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
