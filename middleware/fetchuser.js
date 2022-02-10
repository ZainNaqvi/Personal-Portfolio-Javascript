const jwt = require('jsonwebtoken');
const jwtSecret = "&*^&%%^$%$%#$@#$%^&*(*&^";
const fetchuser = (req,res,next)=>{
    const token  = req.header('auth-token');
    if(!token){
        return res.status(400).json({err:"Authentificate with the valid Authtoken."})
    }
try {
    const data = jwt.verify(token,jwtSecret);
    req.user = data.user;
    next();
    
} catch (error) {
    return res.status(400).json({err : "Authentificate with the valid Authtoken."}),console.error(err)
}
}
module.exports = fetchuser;