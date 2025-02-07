const express= require ('express')
const app=express()
require('dotenv').config();
const connectDB=require('./db/connect')
// console.log(connectDB)
  connectDB(process.env.MONGO_URL)
  .then(
    ()=>{
      console.log("database Connected")
      app.listen(3000,()=>{
        console.log("Running server")
      })
    }
    ).catch((err)=>{console.log(err);})
  
