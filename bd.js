var mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/otb", {
	server: {
		socketOptions: {
			socketTimeoutMS: 3000,
			connectionTimeout: 2000
		}
	}
})

var db = mongoose.connection

module.exports = db