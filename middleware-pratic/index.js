 const express = require('express');
 const app = express();
   
 function isOldMiddleware( req,res,next){
    const age = req.query.age
    if(age>14){
      next();
    }
   
    else{
        res.json({
           msg:" sorry your age is not yet "
        })
    }
 }
 //app.use(isOldMiddleware);

 app.get('/ride1', isOldMiddleware, function(req,res){
    res.json({
        msg:" you have successfully ride 1 "
    })
 })
 app.get('/ride2',isOldMiddleware, function(req,res){
    res.json({
        msg:" you have successfully ride 1 "
    })
 })
  app.get('/ride3',isOldMiddleware, function(req,res){
    res.json({
        msg:" you have successfully ride 1 "
    })
 })
const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});