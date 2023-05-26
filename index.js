const express = require("express");
require('dotenv').config();
const server = express();

server.use(express.static("STATIC_FOLDER"))

server.get("/homepage",(req,res)=>{
    res.json({"country":"bangladeshi coder"});
})

server .listen(process.env.PORT,function(){
    console.log("Server is running",process.env.PORT);
})