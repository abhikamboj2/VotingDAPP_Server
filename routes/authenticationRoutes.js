const express=require('express')
const ethers=require('ethers')
const router=express.Router();
const jwt=require('jsonwebtoken')
// const CandidateModel=require('../models/CandidateSchema')
router.post('/authentication',async(req,res)=>{
    try{
        const {accountAddress}=req.query;
        const {signature}=req.body;
        console.log(accountAddress,signature)
        if(!signature || !accountAddress){
            res.status(500).json({message:'Authentication Failed'})
        }
        const message="Welcome to Voting DAPP. You now agree to term and Conditions";
        const recoverAddress=ethers.utils.verifyMessage(message,signature)
        console.log(recoverAddress)
        if(recoverAddress.toLowerCase()=== accountAddress.toLowerCase()){
            const token =jwt.sign({accountAddress},'secretKey');
            return res.status(200).json({
                message:'Authentication Successful',
                token:token
            })
        }
        else{
            throw new Error("Recovered address not same as accounut address")
        }
    }catch(er){
        res.status(500).json({message:'Authentication failed'})
    }
})
module.exports=router