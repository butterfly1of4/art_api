//axios or fetch
const axios = require('axios').default;
// const fetch = require("node-fetch");
const fs = require('fs');

// q=ulan_id:500011328?
const url = "https://api.harvardartmuseums.org//person?apikey=febeaa16-0d03-4897-9c68-6b012cec30cd"

let works = ''

axios.get(url)
  .then(function (response) {
    works = JSON.stringify(response)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(  
      
      
    fs.writeFile("./lib/data.json", works, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        })
  );
    










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