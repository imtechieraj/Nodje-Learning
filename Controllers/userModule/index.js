const { addUserdata } = require('../../Models/userModule/');
const { passwordHash } = require('../componets');

const registerUserdata = (req, res) => {
   passwordHash(req.body.password,(err,hash)=>{
    req.body.password=hash.password;
    addUserdata(req.body, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ status: true, statusCode: 201, message: "success", data: result })
        }
    })
    })
}

module.exports = {
    registerUserdata
}