const express = require("express");
const router = express.Router();

router.get("/listProduct", (req, res) => {
    res.send(req.body)
})

router.post("/addProduct", (req, res) => {
    res.send(201, req.body)
})

router.put("/updateProduct", (req, res) => {
    res.send(204, req.body)
})

router.delete("/deleteProduct", (req, res) => {
    res.send(405, req.body)
})

module.exports = router;