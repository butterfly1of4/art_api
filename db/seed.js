const Records = require("../models/Records");
const data = require("../lib/data.json");

const manyRecords = data.records.map((item) => {
  const record = {};
  record.title = item.title;
  record.rank = item.rank;
  record.classification = item.classification;
  record.url = item.url;
  record.century = item.century;
  record.culture = item.culture;
  record.primaryimageurl = item.primaryimageurl;
  record.medium = item.medium;
  return record;
});

Records.deleteMany({}).then(() => {
  Records.create(manyRecords)
    .then((records) => {
      console.log(records);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});
