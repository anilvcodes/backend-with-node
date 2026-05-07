const express = require('express');
const adminMiddleware=require("../middleware/admin")
const{ Admin,Course}=require("../db")
const router=express.Router();
router.post('/signup',async (req ,res)=>{
    const username= req.body.username;
    const password= req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"user created scuccessfully "
    })
})