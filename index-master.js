const cors = require("cors")
const app = require("express")();
app.use(cors())
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

//http://localhost:8080/record/_id/:idValue
app.get("/record/_id/:id", (req, res) => {
  Records.find({ _id: req.params.id }).then((record) => {
    res.json(record);
  });
});

//GET TITLE
//http://localhost:8080/record/title/:title

app.get("/record/title/:title", (req,res ) => {
  Records.find({title: req.params.title})
  .then((record) => {
    res.json(record)
  })
})

//GET RANK
//http://localhost:8080/record/:rank
app.get("/record/:rank", (req, res) => {
  Records.find({ rank: req.params.rank }).then((record) => {
    res.json(record);
  });
});

//POST REQUESTS
//http://localhost:8080/create_record

app.post("/create_record", (req, res) => {
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
