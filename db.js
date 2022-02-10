const  mongoose = require('mongoose');

const mongooseURI = "mongodb+srv://zainhaider:root@cluster0.xjuuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectToMongo = ()=>{
    mongoose.connect(mongooseURI , {
        useNewUrlParser:true,
        useUnifiedTopology:true
 
    }).then(()=>{
        console.log('connected to the MongoDb successfully.')
    }).catch((error)=>console.log("this is error ",error));
}
module.exports = connectToMongo();