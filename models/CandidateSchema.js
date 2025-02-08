const mongoose=require('mongoose')
const candidateSchema= new mongoose.Schema({
    accountAddress:{
        type:String,
        required:true
    },
    ImageName:{
        type:String,
        required:true
    }
})
const CandidateModel=mongoose.model('Candidates',candidateSchema)
module.exports= CandidateModel