const { userSchema } = require('../dbSchema');

const addUserdata = (userdata, callback) => {
    userSchema.create(userdata).then((result) => {
        callback(null, result)
    }).catch((err) => {
        callback(err)
    })
}

module.exports = {
    addUserdata
}