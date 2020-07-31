const app = require("express")();
const bodyParser = require("body-parser");
const Records = require("./models/Records");
const data = require("./lib/data.json");
app.use(bodyParser.json());

//GET REQUESTS
app.get("/", (req, res) => {
  res.send("This is a GET route");
});

app.get("/record", (req, res) => {
  Records.find({}).then((records) => {
    console.log("first get request")
    res.json(records);
  });
});


app.get("/record/_id/:id", (req, res) => {
  Records.find({_id:req.params.id}).then((record) => {
    console.log("found id")
    res.json(record);
  });
});
// app.get("/record/title/:title", (req, res) => {
//   Records.find({ title: req.params.title }).then((records) => {
//     console.log("everywhere")
//     res.json(records);
//   });
// });

//POST REQUESTS
app.post("/record", (req, res) => {
  console.log("req.body", req.body);
  Records.create(req.body).then((record) => {
    console.log("hello");
    res.json(record);
  });
});

//DELETE REQUESTS
app.delete("/record/_id/:", (req, res) => {
  Records.findByIdAndRemove({id:req.params.id})
  .then((records) => {
    console.log("help me")
    res.json(records);
  });
});


app.listen(3000, () => {
  console.log("listening");
});
