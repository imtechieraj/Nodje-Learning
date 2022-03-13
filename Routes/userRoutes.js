const express = require('express');
const router = express.Router();

router.post("/register",(req,res)=>{
    res.send(201,req.body)
})

router.post("/login",(req,res)=>{
    res.send(req.body)
})

router.post("/forgetPassword",(req,res)=>{
    res.send(req.body)
})

router.put("/resetPassword",(req,res)=>{
    res.send(204,req.body)
})

module.exports = router;