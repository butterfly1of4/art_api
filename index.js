const app = require("express")();
const bodyParser = require("body-parser");
const Records = require("./models/Records");
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("This is a GET route");
// });

app.get("/record", (req, res) => {
  Records.find({}).then((records) => {
    res.json(records);
  });
});
app.delete;

app.listen(3000, () => {
  console.log("listening");
});
