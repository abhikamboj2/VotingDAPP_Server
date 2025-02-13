const express=require('express')
const router=express.Router();
// const CandidateModel=require('../models/CandidateSchema')
router.post('/authentication',async(req,res)=>{
    try{
        const {accountAddress}=req.query;
        const {signature}=req.body;
        console.log(accountAddress,signature)
    }catch(er){
        console.error(er)
    }
})
module.exports=router