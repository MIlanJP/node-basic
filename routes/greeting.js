const express = require('express')
// Importing services to print from controller.js
const greeting=require('../controller/controller')
const router=express.Router()

router.get("/:name", greeting.printwelcome);
  
  module.exports=router;