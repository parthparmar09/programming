const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Server is running...");
});

const asyncPromise =() => {return new Promise((res,rej) => {
    let status = true;
    if(status){
        res("Promise Okk");
    }
    else{
        rej("Promise Fail");
    }
})}
const mw1 = (req, res, next) => {
    console.log('in mw1...');
    try {
        let status = true;
    if(status){
        // res.status(200).send("MW 1 Success!");
        next()
    }
    else{
        res.status(401);
        throw new Error("MW 1 Error");
    }
    } catch (error) {
        
        next(error);
    }

};
const mw2 = async (req, res, next) => {
    console.log('in mw2...');

    const data = await asyncPromise();
    console.log(data);
    next();
};
const mw3 = (req, res, next) => {
    console.log('in mw3...');
    res.status(501);
    throw new Error("mw 3 error!")
};

const notFound = (req,res,next) => {
    res.status(404);
    throw new Error("Page Not Found");
//   next(err);
}

const globalErr = (err, req, res, next) => {
    console.log('in Global MW...');
    console.log(err.statusCode, res.statusCode);
    err.statusCode = err.statusCode || res.statusCode || 500;
    res.status(err.statusCode).json({success: false, status:err.statusCode , msg : err.message});
};



app.use('/api/' ,mw1,mw2,mw3);
app.use('*' , notFound);
app.use(globalErr)


// app.all("/", (req, res) => {
//   console.log(req);
//   res.end("Hello World!!!");
// });
