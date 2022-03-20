const { addUserdata, validUser } = require('../../Models/userModule/');
const { passwordHash, passwordVerify,jwtTokenGen } = require('../componets');

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

const tokenGen=(userData,res)=>{
    let email=userData.email;
    let token=jwtTokenGen(email);

    res.send({ status: true, message: "login success", userData ,token})
}

const passwordCheck = (userData, password, res) => {
    let encodePassword = userData[0].password;
    passwordVerify(password, encodePassword, (err,result) => {
        if (result) {
            tokenGen(userData[0],res)
        } else {
            res.send("incorrect password")
        }
    })
}

const checkUser = (reqData, res) => {
    validUser(reqData, (err, result) => {
        if (result) {
            if (result.length === 0) {
                return res.send("user not found")
            } return passwordCheck(result, reqData.password, res)
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