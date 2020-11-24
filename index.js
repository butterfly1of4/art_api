const cors = require("cors");
const app = require("express")();
app.use(cors());
const bodyParser = require("body-parser");
const Records = require("./models/Records");
const data = require("./lib/data.json");
const swagger = require("swagger-ui-express");
const { title } = require("process");
app.use(bodyParser.json());

// app.use((req,res,next) => {
//   res.header("Access-Control-Allow-Origin","*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   )
//   if (req.method === "OPTIONS"){
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
//     return res.status(200).json({})
//   }
//   next()
// })

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
//GET ID
app.get("/record/id/:id", (req, res) => {
  Records.find({ _id: req.params.id }).then((record) => {
    res.json(record);
  });
});
//GET TITLE
app.get("/record/title/:title", (req, res) => {
  Records.find({ title: req.params.title }).then((record) => {
    res.json(record);
  });
});

//GET ONE
//http://localhost:3000/record/_id/:idValue
app.get("/record/:rank", (req, res) => {
  Records.find({ rank: req.params.rank }).then((record) => {
    res.json(record);
  });
});

//POST/CREATE REQUESTS
//http://localhost:3000/record/_id/

app.post("/create_record", (req, res) => {
  Records.create(req.body).then((record) => {
    res.json(record);
  });
});

//POST/CREATE/UPDATE ONE
app.post("/record/:id/:title", (res,req) =>{
  Records.findByIdAndUpdate(req.params.id,
    {$push:{record:req.body}},
    {new:true}).then(record => {
      res.json(record)
    })
})

//UPDATE/PUT REQUESTS
//UPDATE BY ID
//http://localhost:3000/record/_'anyId'/
app.put("/record/:id", (req, res) => {
  Records.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((record) => {
    res.json(record);
  });
});

//UPDATE/PUT BY TITLE
app.put("/record/:id/item", (req, res) => {
  Records.findByIdAndUpdate(
    {"_id":req.params.id, "items._id":req.params.itemID},
    {$set: {'items.$.title':req.body.title}}
    .then(record => {
      res.json(record)
    })
)})
// app.put("record/:id/item", (req,res)=>{
//   Records.findByIdAndUpdate(req.params.id,
//     {$push: {title: req.params.title}},
//     req.body,
//     {new: true})
//     console.log("true")
//     .then(record => {
//       res.json(record)
//     })
// })
// app.put("record/:id/title/:title", (req, res) => {
//   Records.findOneAndUpdate(
//     req.params.title,
//     { $push: {title: req.body}},
//     {new: true})
//     console.log(title)
//     .then(record => {
//     res.json(record);
//   });
// });

//DELETE REQUESTS
//http://localhost:3000/record/_'anyId'/
app.delete("/record/:id", (req, res) => {
  Records.findByIdAndDelete({ _id: req.params.id }).then((record) => {
    res.json(record);
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
