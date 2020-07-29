const app = require('express')();
const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', (request,response) => {
    response.send('This is a GET route')
})

app.listen(3000, () => {
    console.log("listening")
})