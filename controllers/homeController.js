
const path = require("path");

const homeController = (req,res)=>{
    // res.send("Welcome to express MVC structure.");
    res.sendFile(path.join(__dirname,"../public","/home.html"));
};

module.exports = homeController;