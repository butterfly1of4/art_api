//axios or fetch
// const axios = require("axios").default;
const fetch = require("node-fetch");
const fs = require("fs");

// https://api.harvardartmuseums.org/person?q=culture:Dutch
//ulan_id:=500011328
//https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=YOUR_API_KEY

const url =
  "https://api.harvardartmuseums.org/object?q=culture:Italian&apikey=208241b1-775f-4706-8f78-b382d1981b11";

let works = [];

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let works = JSON.stringify(res);
    // let entries = JSON.stringify(res);
    // works.push(entries)
    console.log(works);
    fs.writeFile("./lib/data.json", 
    works, (err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log("success");
      }
    })
    // works.push();
  });


