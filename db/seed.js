const Records = require("../models/Records");
const data = require("../lib/data.json");
const newJSON = require("./getRecords")


const manyRecords = data.map((item) => {
  const record = {};
  record.title = item.title;
  record.id = item.id;
  record.classification = item.classification;
  record.url = item.url;
  record.century = item.century;
  record.culture = item.culture;
  record.medium = item.medium;
  return record;
});

console.log(manyRecords)

Records.deleteMany({}).then(() => {
  Records.create(manyRecords).then((records) => {
    console.log(records);
    process.exit();
  })
  .catch(err => {
      console.log(err)
      process.exit()
  } );
});
