const { userSchema } = require('../dbSchema');

const addUserdata = (userdata, callback) => {
    userSchema.create(userdata).then((result) => {
        callback(null, result)
    }).catch((err) => {
        callback(err)
    })
}

const validUser = (reqData, callback) => {
    userSchema.find({ email: reqData.email }, (err, result) => {
        if (result) {
            return callback(null, result)
        } return callback(err)
    })
}

module.exports = {
    addUserdata,
    validUser
}