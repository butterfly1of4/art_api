const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
// const People = new Schema({
//     role: String,
//     birthplace: String,
//     name: String,
//     personid: Number,
//     deathplace: String
// })
const Records = new Schema({
  title: String,
  // "id": Number,
  classification: String,
  url: String,
  century: String,
  culture: String,
  primaryimageurl: String,
  medium: String,
  // people: [People]
});
module.exports = mongoose.model("Records", Records);
