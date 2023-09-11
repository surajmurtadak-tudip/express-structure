const express = require("express");
const app = express();
const router = require("./routes/homeRoute");

app.use(express.static("public"));
app.use("/",router);
app.listen(4000,()=>console.log("server up and running"));