const mongoose = require('mongoose')
const { Schema } = mongoose;

const CommentsSchema = new Schema({
  name : {
    type : String,
  required:true  
},
 comment : {
      type : String,
      required:true
  },
  date : {
      type : Date ,
      default : Date.now
  }
});
const Comments =  mongoose.model("comments",CommentsSchema);
module.exports = Comments;