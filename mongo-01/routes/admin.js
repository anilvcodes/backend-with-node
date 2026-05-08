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
        msg:"user created successfully "
    })
})

router.post('/courses',adminMiddleware, async(req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const imgLink=req.body.imgLink;
    const price=req.body.price;

    const newCourse= await Course.create({
        title,
        description,
        imgLink,
        price
    })
    res.json({
        msg: ' courses created successfully' , courseId:newCourse._id 
    })

})
router.get('/courses',adminMiddleware, async (req,res)=>{
    const response= await  Course.find({});
    res.json({
       Courses: response

    })
      

})
module.exports=router;