const express = require('express');
const router = express.Router();
const Comment = require('../models/Comments')
// Route no 1 which is insert the comment No LoggedIn required.
router.post('/newcomment',async(req,res)=>{
try {
       let success = false;
    const { name  ,comment}  = req.body;
    let  userComment  = new Comment({ name  , comment});
    
      let  saveComment = await userComment.save();
        success = true;
      res.json({ success,saveComment})
} catch (error) {
    console.error(error)
    res.status(400).json({mess : "Internal Server Error."})
}
})
// Route no 2 Fetch the comments of the users No LoggedIn required.
router.get('/fetchcomment',async(req,res)=>{
try {
       let success = false;
    let  userComments  = await  Comment.find();
        success = true;
      res.json(userComments)
} catch (error) {
    console.error(error)
    res.status(400).json({mess : "Internal Server Error."})
}
})
module.exports = router;