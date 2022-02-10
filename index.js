const connectToMongoDb = require("./db")
var cors = require('cors') 
const dotenv = require('dotenv')
connectToMongoDb;

const express = require('express');
const app = express();
dotenv.config({path : './Config.env'})
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());

// Availble Routes are
app.use('/api/comments',require('./routes/comments'))
app.use('/api/auth',require('./routes/auth'))
//appp is listen in the port below
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
}
app.listen(PORT, ()=>{
console.log(`The app is running in the http://localhost:${PORT}`)
})
