# art_api
# Harvard Art Search API


This application allows you to look through the works included in the libraries affiliated with Harvard. These inclue the Fogg Museum, Busch-Reisinger Museum and Arthur M. Sackler Museum.  


# **Installation and Dependencies**
The dependencies needed to run this API are; 
    -NPM (Node): use: `NPM install`
    -Mongoose : use:npm `install mongoose`
    -Fetch : `npm install node-fetch`
    -Express : use: `npm install express`
    -CORS : use `npm insall cors`
All of them need to be installed and up to date. Use npm to install the other 3. This install will require a knowledge of Node and JavaScript. All of this was done on MacOS, so other interfaces may be different. Chrome was used to build this webpage along with VSC Code using javascript along with NPM to manage dependencies and istall, Mongoose to interface with the database, MongoDB to create a database, and Express to act as the webserver. All calls to the API were made using Fetch.

# **Use and Navigation**
**GET: and POST**
To open the API, open your browser to: (localhost:3000/record) 
                                        <!-- (https://rocky-hamlet-98173.herokuapp.com/record) -->

This should give you a list of the works contained in the API. It also allows you to add to the API. 

To search by ID: (localhost:3000/record/_id/ID_NUBMER_HERE)
                <!-- (https://rocky-hamlet-98173.herokuapp.com/record/_id/idValue) -->

**DELETE and PUT**
Entries can be updated and deleted using the same _id number;

(localhost:3000/record/_ID-NUMBER)
<!-- (https://rocky-hamlet-98173.herokuapp.com/record/_idValue) -->

<em>
**NOTE**: For increased functionality, optional fields should be added so the user can search by:
Fields:
    -title
    -classification
    -url  <em>This is the Harvard assigned link to the image</em>
    -century  <em>Please use a string: ex: "20th century" </em>
    -culture
    -medium
 A field name MUST proceed the id number before entering the optional text.
</em>


# **Data and Links**
The full code can be found at: [Art Api](https://github.com/butterfly1of4/art_api) and can be seen online on [Github pages](https://butterfly1of4.github.io/art_api/) [Mongo Atlas](link) and [Heroku](https://rocky-hamlet-98173.herokuapp.com/)
The full Harvard API can be found: 
[Harvard website](https://github.com/harvardartmuseums/api-docs)
The full collection at can be viewed online at [Harvard Art Museums](https://www.harvardartmuseums.org/)


