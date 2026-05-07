const {Admin}= require("../db");

function adminMiddleware(req,res,next){
    const username=req.header.username;
    const password=req.header.password;


Admin.findOne({
    username:username,
    password:password
})
.than(function(value){
    if(value){
        next()
    } else{
        res.status(403).json({
            msg:"Admin not exsit";
        })
    }
})
}
module.exports= adminMiddleware;