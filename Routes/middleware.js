const { serversideValidation } = require('../Controllers/componets')

const validationMiddleware = (req, res, next) => {
    console.log("I am a middleware")

    serversideValidation(req, res, (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
    //res.send("hello")
    //next()
}



module.exports = {
    validationMiddleware
}