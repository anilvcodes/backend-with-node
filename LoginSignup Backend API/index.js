const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPass = "12345";

const app = express();

app.use(express.json());
const All_USERS = [
    { 
        username :"anilkumarve51@gmail.com",
        pass:"123",
        name:"anil",
    }, 
    {
        username :"anilkumarve57@gmail.com",
        pass:"123",
        name:"anil",
    }, 
    {
         username :"anilcodes@gmail.com",
        pass:"123",
        name:"anil",
    }
];

 function userExists(username,pass){
    let userExists=false;
    for(let i=0;i<All_USERS.length;i++){
        if(All_USERS[i].username==username && All_USERS[i].pass==pass){
            userExists=true ;
        }
    }
return userExists;
 }

 app.post('/signin', function(req,res){
    const username=req.body.username;
    const pass=req.body.pass;
    if(!userExists(username,pass)){
        return res.status(403).json({
            msg:"user do not exists in memory db"
        });
    }
    var token=jwt.sign({username:username},jwtPass);
       return res.json({
        token
       });
 });

 app.get('/user', function (req,res){
    const token= req.headers.authorization;
    try{
        const decode =jwt.verify(token,jwtPass);
        const username=decode.username;
                 return res.json({
            username: All_USERS
                 })
    }catch(err){
        return res.status(403).json({
            msg:"invalid token "
        });

    }
 });

 app.listen(3000);