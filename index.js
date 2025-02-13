const express= require ('express')
const cors=require('cors')
const app=express()
require('dotenv').config();
const connectDB=require('./db/connect');
const CandidateRoutes = require('./routes/CandiateRoutes');
const authenticationRoutes=require('./routes/authenticationRoutes')
app.use(express.json())
app.use(cors())
app.use('/api',authenticationRoutes)
app.use('/api',CandidateRoutes)
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
  
