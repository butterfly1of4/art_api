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
    res.json(records);
  });
});

// app.get("/record/:id", (req, res) => {
//   Records.find({ id: req.params.id }).then((record) => {
//     res.json(record);
//   });
// });
app.get("/record/:classification", (req, res) => {
  Records.find({ classification: req.params.classification }).then((record) => {
    res.json(record);
  });
});

app.get("/record/:title", (req, res) => {
  Records.find({ title: req.params.title }).then((records) => {
    res.json(records);
  });
});

//POST REQUESTS
// app.post("/record", (req, res) => {
//   console.log("req.body", req.body);
//   Records.create(req.body).then((record) => {
//     console.log("hello");
//     res.json(record);
//   });
// });

// //UPDATE/PUT REQUESTS
// app.put("/record/:id/item", (req, res) => {
//   Records.findByIdAndUpdate(
//     req.params.id,
//     { $push: { items: req.body } },
//     { new: true }
//   ).then((record) => {
//     console.log("here i am")
//     res.json(record);
//   });
// });
// app.put("/record/:id/classification", (req, res) => {
//   Records.findByIdAndUpdate(
//     req.params.id,
//     { $push: { classifications: req.body } },
//     { new: true }
//   ).then((record) => {
//     console.log("here i am")
//     res.json(record);
//   });
// });

//DELETE REQUESTS
app.delete("/record/:id", (req, res) => {
  Records.findByIdAndRemove({id: req.params.id }).then((records) => {
    console.log("help me")
    res.json(records);
  });
});

app.listen(3000, () => {
  console.log("listening");
});
