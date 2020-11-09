const cors = require("cors")
const app = require("express")();
app.use(cors())
const bodyParser = require("body-parser");
const Records = require("./models/Records");
const data = require("./lib/data.json");
const swagger = require("swagger-ui-express");
app.use(bodyParser.json());

//GET REQUESTS
// app.get("/", (req, res) => {
//   res.send("This is a GET route");
// });

//GETALL
//http://localhost:3000/record
app.get("/record", (req, res) => {
  Records.find({}).then((record) => {
    res.json(record);
  });
});

//GET TITLE
app.get("/record/title/:title", (req,res ) => {
  Records.find({title: req.params.title})
  .then((record) => {
    res.json(record)
  })
})

//GET ONE
//http://localhost:3000/record/_id/:idValue
// app.get("/record/_id/:id", (req, res) => {
//   Records.find({ _id: req.params.id }).then((record) => {
//     res.json(record);
//   });
// });

//POST/CREATE REQUESTS
//http://localhost:3000/record/_id/

app.post("/create_record", (req, res) => {
  Records.create(req.body).then((record) => {
    res.json(record);
  });
});

//UPDATE/PUT REQUESTS
//http://localhost:3000/record/_'anyId'/
// app.put("/record/:id", (req, res) => {
//   Records.findByIdAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//   }).then((record) => {
//     res.json(record);
//   });
// });
app.put("/record/:url", (req, res) => {
  Records.findByIdAndUpdate({url: req.params.url}, req.body, {
    new: true})
    .then((record) => {
    res.json(record);
  });
});
// app.put("/record/:id/item/:item", (req, res) => {
//   Records.findByIdAndUpdate(req.params.id,
//     { $push: {items: req.body}},
//     {new: true})
//     .then((record) => {
//     res.json(record);
//   });
// });

//DELETE REQUESTS
//http://localhost:3000/record/_'anyId'/
app.delete("/record/:id", (req, res) => {
  Records.findOneAndDelete({ _id: req.params.id }).then((records) => {
    res.json(records);
  });
});

//heroku
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
//
app.listen(3000, () => {
  console.log("listening");
});
