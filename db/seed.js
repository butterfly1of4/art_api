//axios or fetch
const axios = require('axios').default;
const fs = require('fs')

const url = "https://api.harvardartmuseums.org//person/PERSON_ID?apikey=xfebeaa16-0d03-4897-9c68-6b012cec30cd"

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    let countries = JSON.stringify(res);
    console.log(countries);
    fs.writeFile("./db/data.json", countries, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });