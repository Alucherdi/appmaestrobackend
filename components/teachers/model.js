var mongoose = require("mongoose")
var Schema = mongoose.Schema

var teacherSchema = new Schema({
    name: String,
    schools: []
}, { collection: "teachers" })

var Teacher = mongoose.model("Teacher", teacherSchema)

module.exports = Teacher