var express = require("express")
var app = module.exports = express()

app.set("views", __dirname)

app.get("/", (req, res) => {
    res.render("test")
})