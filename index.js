const app = require("express")();
const bodyParser = require("body-parser");
const Records = require("./models/Records");
const data = require("./lib/data.json");
const swagger = require("swagger-ui-express");
app.use(bodyParser.json());

//GET REQUESTS
app.get("/", (req, res) => {
  res.send("This is a GET route");
});

//http://localhost:3000/record
app.get("/record", (req, res) => {
  Records.find({}).then((records) => {
    res.json(records);
  });
});

//http://localhost:3000/record/_id/:idValue
app.get("/record/_id/:id", (req, res) => {
  Records.find({ _id: req.params.id }).then((record) => {
    res.json(record);
  });
});

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

app.listen(3000, () => {
  console.log("listening");
});
