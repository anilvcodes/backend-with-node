const  jwt = require("jsonwebtoken");



const value  ={
   name :"anil k verma",
   id :123456

}
const token= jwt.sign(value,"secret" )
console.log(token);