const express = require("express");
const { z } = require("zod");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());



// Zod schema
const schema= z.array(z.number());


const userSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.string().email("Invalid email"),
    age: z.number().min(18, "Must be 18+")
}); 

app.post("/health-checkup",function(req,res){
    const kidney= req.body.kidney;
   
    const response= schema.safeParse(kidney)
     console.log(response);
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    res.send({
        response
       
    })
})
// Route
app.post("/post", function (req, res) {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.format()
        });
    }

    res.json({
        msg: "Valid data",
        data: result.data
      
    });
});




// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});