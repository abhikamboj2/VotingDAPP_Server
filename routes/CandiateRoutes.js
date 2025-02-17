const express=require('express')
const router=express.Router();
const CandidateModel=require('../models/CandidateSchema');
const { authentication } = require('../middleware/authentication');
const multer = require('../middleware/multer');
router.post('/postCandidateImage',authentication,multer.uploadCandidate,async(req,res)=>{
    console.log("postcandidate")
    // try{
    //     const {accountAddress,ImageName}=req.body;
    //     const saveCandidate=await CandidateModel.create({
    //         accountAddress:accountAddress,
    //         ImageName:ImageName
    //     })
    //     res.status(200).json(saveCandidate)
    // }catch(er){
    //     console.error(er)
    // }
})
module.exports=router