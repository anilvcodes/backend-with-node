const express = require("express")
const port=3000
const app=express();
 app.get('/', function(req ,res){
    res.send("hello world this is my first server ")
 })
  app.get('/mydata', function(req ,res){
    res.json({
        name :"anil",
        age: 45,
    })
 })
   app.get('/data', function(req ,res){
    res.json({
        name :"annie V",
        age: 45,
    })
 })
 app.listen(port,function(req,res){
    console.log("server are runnning ")
 })