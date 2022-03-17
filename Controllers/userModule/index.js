const { addUserdata, validUser } = require('../../Models/userModule/');
const { passwordHash } = require('../componets');

const registerUserdata = (req, res) => {
    passwordHash(req.body.password, (err, hash) => {
        req.body.password = hash.password;
        addUserdata(req.body, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send({ status: true, statusCode: 201, message: "success", data: result })
            }
        })
    })
}

const passwordCheck = (userData, res) => {
    console.log(userData)
}

const checkUser = (reqData, res) => {
    validUser(reqData, (err, result) => {
        if (result) {
            if (result.length === 0) {
                return res.send("user not found")
            } return passwordCheck(result, req.body.password, res)
        } return res.send("user not found")
    })
}

const login = (req, res) => {
    checkUser(req.body, res)
}

module.exports = {
    registerUserdata,
    login
}