const Joi = require('joi');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const { registerSchema } = require('../Models/userModule/schema')

const serversideValidation = (req, res, next) => {
    const buildSchema = Joi.object(registerSchema);
    const reqData = req.body;
    const result = buildSchema.validate(reqData);
    console.log(result)
    if (result.error) {
        return res.send({ status: false, stateCode: 404, message: result.error.details[0].message });
    } return next()
};

const passwordHash = (password, callback) => {
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            return { status: false, statusCode: 500, message: "something went to wrong on passwordHash method" }
        } callback(null, { password: hash })
    });
}

const passwordVerify = (password, encodePassword, callback) => {
    bcrypt.compare(password, encodePassword, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    })
}

const jwtTokenGen = (email) => {
    var token = jwt.sign({ email: email }, 'shhhhh');

    return token;
}

module.exports = {
    serversideValidation,
    passwordHash,
    passwordVerify,
    jwtTokenGen
}



// let schema = getValidationSchema(req.originalUrl);
// let reqData = req.body;
// let buildSchema = Joi.object().keys(schema)
// let result = Joi.validate(reqData, buildSchema)
// if (result.error === null) {
//     return next();
// } let error_res = { status: false, statusCode: 422, message: result.error.details[0].message }
// return res.status(422).send(error_res);