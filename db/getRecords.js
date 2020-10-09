const fetch = require("node-fetch");
const fs = require("fs");

const url =
  "https://api.harvardartmuseums.org/object?q=culture:Italian&apikey=208241b1-775f-4706-8f78-b382d1981b11&size=100&page=2";


let works = [];

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let works = JSON.stringify(res);
    fs.writeFile("./lib/data.json", works, (err) => {
      if (err) {
      } else {
      }
    });
  });
