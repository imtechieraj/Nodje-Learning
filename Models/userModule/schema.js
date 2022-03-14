const Joi = require('joi');

const registerSchema = {
    fname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    phonenumber:Joi.number()
}

module.exports = {
    registerSchema
}


// "fname":"raj",
//     "username":"thisisraj",
//     "password":"something",
//     "email":"email",
//     "phonenumber":"8973747730"


// fullName: Joi.string().required(),
// email: Joi.string().email().required(),
// timeZone: Joi.string().required(),
// loginType: Joi.string().required().valid('socialLogin'),
// profilePic: Joi.string(),
// socialLogin: Joi.boolean().valid(true).required(),
// formRegister: Joi.boolean().valid(false).required(),