const router = require('express').Router();
const upload = require("../middlewares/fileUpload");
const { StatusCodes } = require('http-status-codes');
const MyError = require('../errors/MyError');


router.post('/' , upload.single('image') , (req,res) => {
    if(req.file){
        res.status(StatusCodes.CREATED).json({success : true ,message: "file uploaded successfully" , url : `/images/${req.file.filename}`})
    }
})

// router.get('/download/:name' , (req,res) => {
//     let file = `./public/images/${req.params.name}`
//     res.download(file)
// })
module.exports = router