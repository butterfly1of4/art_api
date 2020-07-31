const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost", { useNewUrlParser: true });
mongoose.Promise = Promise
//heroku
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/art_api";
  }
 // 
module.exports = mongoose;
