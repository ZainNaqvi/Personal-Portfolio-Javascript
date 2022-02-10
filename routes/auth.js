const express = require('express');
const jwt = require('jsonwebtoken');
const jwtSecret = "&*^&%%^$%$%#$@#$%^&*(*&^";
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser');
// Route no 1 create a new user to the database.
router.post('/signup',async(req,res)=>{
try {
  
  // destructuring name , email , password
  const {name , email , password} = req.body;
  let success = false;
  let user = await  User.findOne({email , email});
  if(user){
    return success = false,
    res.status(400).json({error:"Enter the unique email."})
  }
  const salt  = await bcrypt.genSalt(10);
  const securePass = await bcrypt.hash(password , salt);
   user = new User({
    name , email , password:securePass
  })
  let saveUser = await user.save();
  console.log(saveUser)
  let data = {
    user :{
      id : user.id
    }
  }
  success = true;
  const authtoken = jwt.sign(data , jwtSecret);
  res.json({success , authtoken,data})

}
   catch (error) {
    console.error(error)
    res.status(400).json({mess : "Internal Server Error."})
}

})
// Route no 1 login user in the database.
router.post('/login',async(req,res)=>{
try {
  
  // destructuring name , email , password
  const {  email , password} = req.body;
  let success = false;
  let user = await  User.findOne({email , email});
  if(!user){
    return success = false,
    res.status(400).json({error:"Wroung Email."})
  }
  let comparePass = await bcrypt.compare(password,user.password)
  if(!comparePass){
    return success = false,
    res.status(400).json({error:"Wroung Password."})
  }
  let data = {
    user :{
      id : user.id
    }
  }
  success = true;
  const authtoken = jwt.sign(data , jwtSecret);
  res.json({success , authtoken,data})

}
   catch (error) {
    console.error(error)
    res.status(400).json({mess : "Internal Server Error."})
}

})
// Route no 3 get the user infomation LoggedIN required
router.post('/getuser',fetchuser,async(req,res)=>{
try {
  
const userid = req.user.id;
console.log(userid);
const data = await User.findById(userid).select("-password");
res.json({data})

}
   catch (error) {
    console.error(error)
    res.status(400).json({mess : "Internal Server Error."})
}

})
module.exports = router;