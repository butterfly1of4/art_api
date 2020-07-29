const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/3000", { useNewUrlParser: true });

module.exports = mongoose;