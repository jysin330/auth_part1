require("dotenv").config()
const express = require("express");
const user = require("./model/user")
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>welcome to ineuron</h1>")
});

app.post("/signUp", async (req, res) => {
    // for all mandatory field
    const { firstname, lastname, email, password } = req.body;
    if (!(email && password && firstname && lastname)) {
        res.status(200).send("all the field are required")
    }

    // unique mail
    const extuser = await user.findOne(email)
    if (extuser) {
        res.status(400).send("user already exit")
    }
    //  password

})
module.exports = app;