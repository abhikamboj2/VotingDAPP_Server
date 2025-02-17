const multer=require('multer')
const path=require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `VotingSystem/${destination}`)
    },
    filename: function (req, file, cb) {
      const accountAddress = req.accountAddress
      cb(null, accountAddress+path.extname(file.originalname))
    }
  })
  
module.exports={
    uploadCandidate:multer({storage:storage('CandidateImages')}).single(file)
}