var express = require("express")
var hbs = require("express-handlebars")
var cors = require("cors")
var app = express()


//engine configuration
app.engine("hbs", hbs({
    defaultLayout: "main",
    layoutsDir: "./components/layouts",
    partialsDir: "./components/partials",
    extname: "hbs",
}))

app.set("view engine", "hbs")
app.use(cors())


//database connection
var db = require("./bd")

//components
var test = require("./components/test/router")
app.use(test)

var teachers = require("./components/teachers/router")
app.use(teachers)

//port listening
app.listen(8080)