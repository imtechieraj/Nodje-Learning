const jwt=require("jsonwebtoken");
const { serversideValidation } = require('../Controllers/componets')

const validationMiddleware = (req, res, next) => {
    serversideValidation(req, res, next)
}

const tokenVerify = (req, res, next) => {
    let token=req.headers.authorization;
    jwt.verify(token, 'shhhhh',function(err, decoded) {
        if(err){
            res.send("unAuth")
        }else{
            console.log(decoded)
            //if condition date compare
            console.log("go to controller function ");
        }
       });
}

module.exports = {
    validationMiddleware,
    tokenVerify
}