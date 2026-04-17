const express = require("express")
const app = express();



app.get("/",function(req,res){
    res.send("this  is get route ")
})


app.get('/health-checkup',function (req,res){
    const kidenyId =req.query.kidenyId;
    const username = req.headers.username;
    const password=req.header.password;
    if (username !="anil"&& password!="pass"){
        res.status(403).json({
            msg:"user not exist"
        });
        return;
    }
    if(kidenyId !=1 && kidenyId!=2 ){
    res.status(411).json({
        msg:" wormg user"
    });
    return;
    }
    res.send("your hearth is healthy ")

});
app.listen(3000);