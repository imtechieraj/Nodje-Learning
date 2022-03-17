const express = require('express');
const router = express.Router();
const { validationMiddleware } = require('./middleware');
const { registerUserdata , login} = require('../Controllers/userModule');

router.post("/register", validationMiddleware, registerUserdata)

router.post("/login", login)

router.post("/forgetPassword", (req, res) => {
    res.send(req.body)
})

router.put("/resetPassword", (req, res) => {
    res.send(204, req.body)
})

module.exports = router;