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
    console.log(res);
    let works = JSON.stringify(res);
    console.log(works);
    fs.writeFile("./lib/data.json", works, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });

// axios.get(url)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
// var queryString = {$.param({
//     apikey: "xfebeaa16-0d03-4897-9c68-6b012cec30cd",
//     ulan_id: "500011328",
//     classification: "People"
// })};

// $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
//    console.log(data);
// });

// fetch(url)
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//     let works = JSON.stringify(res);
//     console.log(works);
//     fs.writeFile("./lib/data.json", works, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("success");
//       }
//     });
//   });
