const express = require("express");
const app = express();
const router = require("./routes/homeRoute");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/",router);

app.listen(4000,()=>console.log("server up and running"));