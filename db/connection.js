const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost", { useNewUrlParser: true });
// mongoose.Promise = Promise
module.exports = mongoose;