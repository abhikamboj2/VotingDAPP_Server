const express=require('express')
const router=express.Router();
const CandidateModel=require('../models/CandidateSchema')
router.post('/postCandidateImage',async(req,res)=>{
    try{
        const {accountAddress,ImageName}=req.body;
        const saveCandidate=await CandidateModel.create({
            accountAddress:accountAddress,
            ImageName:ImageName
        })
        res.status(200).json(saveCandidate)
    }catch(er){
        console.error(er)
    }
})
module.exports=router