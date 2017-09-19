var express = require("express")
var bp = require("body-parser")

var app = module.exports = express()

app.set("views", __dirname)
app.use(bp.urlencoded({
    extended: true
}))

var Teacher = require("./model")

app.post("/teachers/getAll", (req, res) => {
    Teacher.find({}, (err, teacher) => {
        if (err) {
            res.send(err)
        }
        res.send(teacher)
    })
})

app.post("/teachers/get", (req, res) => {
    Teacher.find({_id: req.body.id}, (err, teacher) => {
        if (err) {
            res.send(err)
        }
        res.send(teacher)
    })
})

app.post("/teachers/add", (req, res) => {
    var validation = validateInsert(req.body)

    if (validation) {
        var teacher = new Teacher({
            name: req.body.name,
            schools: []
        })
        teacher.save((err, addition) => {
            if (err) {
                res.send("ERROR: " + err)
            }
            res.send("SUCCESS: " + addition)
        })
    } else {
        res.send({
            code: 500,
            msg: "Null params"
        })
    }
    
})

/* Local */

var validateInsert = (body) => {
    console.log(body)
    return (
        body.name != undefined
    ) 
}