const Joi = require('joi');
const bcrypt=require('bcrypt');

const { registerSchema } = require('../Models/userModule/schema')

const serversideValidation = (req,res) => {
    let schema = registerSchema;
    let userData = req.body;
    // let result=schema.validate(userData);
    // console.log(result)
    let buildSchema = Joi.object().keys(schema)
    let result = Joi.valid(userData, buildSchema)
    res.send(result)
    // console.log(result.error)
    // console.log(result)
};

const passwordHash = (password, callback) => {
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            return { status: false, statusCode: 500, message: "something went to wrong on passwordHash method" }
        } callback(null, { password: hash })
    });
}


module.exports = {
    serversideValidation,
    passwordHash
}



// let schema = getValidationSchema(req.originalUrl);
// let reqData = req.body;
// let buildSchema = Joi.object().keys(schema)
// let result = Joi.validate(reqData, buildSchema)
// if (result.error === null) {
//     return next();
// } let error_res = { status: false, statusCode: 422, message: result.error.details[0].message }
// return res.status(422).send(error_res);