What is the minimum viable product (MVP)?
    -express & mongoose
    -one model
    -CRUD functionality and RESTFUL routes 
    -Well documented API routes




    asyncwhatever.js
    const fetch./axios =f require ('')
    const fs = requre('')
    const wahtever  = requrere('./data.json')
    console.log(whatever.results.length) 

    const whatever = []
    async function getwhatever(){
        
    }




    // app.get("/record/:id", (req, res) => {
//   Records.find({ id: req.params.id }).then((record) => {
//     res.json(record);
//   });
// });
// app.get("/record/:classification", (req, res) => {
//   Records.find({ classification: req.params.classification }).then((record) => {
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




get: how routes work
post: body-object structure
delete: delete

have create endpoint (create new doc) one read endpont, delete and edit

Frontend to match. 
react: make a fetch request/call to your api- use your heroku url 
-maybe need form element- use this for PUT and DELETE
-create: have fields for entering POST request

// app.get("/record/title/:title", (req, res) => {
//   Records.find({ title: req.params.title }).then((records) => {
//     console.log("everywhere")
//     res.json(records);
//   });
// });



getRecords:// https://api.harvardartmuseums.org/person?q=culture:Dutch
//ulan_id:=500011328
//https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=YOUR_API_KEY



post request is now coming from FORM
info is the HTTP request body
-search: read by id(id/:id etc)


download REACT and REACTRouter
and/or framework

routerdom: this.props.match 
history too

create app component- then create one button tht shows everything that makes a fetch request to your api 

make POST request to /id etc and body is the information you want to update

Page needs:

    -navbar - 
    -form-submit event
    submit button
    searchbar
        -image linked to url
    find method - submit event
    title
    create 

What goes where