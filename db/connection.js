const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost", { useNewUrlParser: true });

module.exports = mongoose;
