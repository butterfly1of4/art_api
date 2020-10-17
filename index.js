const cors = require("cors")
const app = require("express")();
app.use(cors())
const bodyParser = require("body-parser");
const Records = require("./models/Records");
const data = require("./lib/data.json");
const swagger = require("swagger-ui-express");
app.use(bodyParser.json());

//SET ROUTE
app.get("/", (req, res) => {
  res.send("This is a GET route");
});

//GET ROUTES- ALL
//http://localhost:3000/record
app.get("/records", (req, res) => {
  Records.find({}).then((records) => {
    res.json(records);
  });
});

//GET ROUTES-ONE
//http://localhost:3000/record/_id/:idValue
app.get("/record/_id/:id", (req, res) => {
  Records.find({ _id: req.params.id }).then((record) => {
    res.json(record);
  });
});

//GET ROUTE-ALL IN CATEGORY
// app.get("/record/medium/:medium", (req, res) => {
//   Records.find({ medium: req.params.medium }).then((record) => {
//     res.json(record);
//   });
// });

//POST REQUESTS
//http://localhost:3000/record/_id/

app.post("/record", (req, res) => {
  Records.create(req.body).then((record) => {
    res.json(record);
  });
});

//UPDATE/PUT REQUESTS
//http://localhost:3000/record/_'anyId'/
app.put("/record/:id", (req, res) => {
  Records.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((record) => {
    res.json(record);
  });
});

//DELETE REQUESTS
//http://localhost:3000/record/_'anyId'/
app.delete("/record/:id", (req, res) => {
  Records.findByIdAndRemove({ _id: req.params.id }).then((records) => {
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
