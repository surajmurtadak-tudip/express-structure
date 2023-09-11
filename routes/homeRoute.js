const express = require("express");
const homeController = require("../controllers/homeController");
const router = express.Router();

router.get("/",homeController);

router.post("/send",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;