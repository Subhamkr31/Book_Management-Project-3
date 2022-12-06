
const express = require('express')
const bodyParser = require('body-parser')
const route = require('./route/route')
const mongoose = require('mongoose')
const app = express()
const multer = require("multer");
const AppConfig = require('aws-sdk');
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().any())

app.use(cors())

mongoose.connect("mongodb+srv://Maheshpppp:GfIbvAzpfnLY6IEj@cluster0.lhhqee7.mongodb.net/test", {
    useNewUrlParser: true
})
    .then(() => console.log('mongoDb is connected'))
    .catch((error) => console.log(error))


// mongoose.connect("mongodb+srv://harsh-developer:aA12345678@cluster0.lxbes.mongodb.net/group22Database?retryWrites=true&w=majority",{
//     useNewUrlParser: true
// })



app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
});
