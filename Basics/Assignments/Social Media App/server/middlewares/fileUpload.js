const multer = require('multer');
const fs = require('fs');
const { StatusCodes } = require('http-status-codes');
const MyError = require('../errors/MyError');
const path = require('path');

//defining the storage directory and file names
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null , './public/images')
    },
    filename : (req,file,cb) =>{
        cb(null , "img_" + Date.now() + path.extname(file.originalname))
    }
})
//setting up the file limits
const upload = multer({
    storage,
    limits : {
        fileSize : 1024*1024*1,
    },
    fileFilter : (req,file,cb) => {
        if(!(file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' )){
            cb(null , false )
            return cb(new MyError(StatusCodes.BAD_REQUEST,'only jpg|jpeg|png files are allowed '));
        }   
        cb(null , true)
    }
})

module.exports = upload;