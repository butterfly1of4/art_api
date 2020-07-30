const app = require("express")();
const bodyParser = require("body-parser");
const Records = require("./models/Records");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is a GET route");
});

app.get("/record", (req, res) => {
  Records.find({}).then((records) => {
    res.json(records);
  });
});

app.get("/record/title", (req, res) => {
  Records.findOne({ title: req.params.title }).then((record) => {
    res.json(record);
  });
});

app.post("/record", (req, res) => {
  console.log("req.body", req.body);
  Records.create(req.body).then((record) => {
    res.json(record);
  });
});

app.put("/records/:id/item/:item", (req, res) => {
  Records.findByIdAndUpdate(
    req.params.id,
    { $push: { items: req.body } },
    { new: true }
  ).then((record) => {
    res.json(record);
  });
});

app.delete("/record/:id", (req, res) => {
  Records.findByIdAndRemove({ _id: req.params.id }).then((record) => {
    res.json(record);
  });
});

app.listen(3000, () => {
  console.log("listening");
});
