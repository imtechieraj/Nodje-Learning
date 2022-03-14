const express = require('express');
const router = express.Router();
// const {  } = require('./middleware');
const { registerUserdata } = require('../Controllers/userModule');

router.post("/register", registerUserdata)

router.post("/login", (req, res) => {
    res.send(req.body)
})

router.post("/forgetPassword", (req, res) => {
    res.send(req.body)
})

router.put("/resetPassword", (req, res) => {
    res.send(204, req.body)
})

module.exports = router;