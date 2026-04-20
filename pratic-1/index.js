const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// GET route
app.get("/", function (req, res) {
    res.send("this is get route in my backend server");
});

// POST route
app.post("/health-checkup", function (req, res) {

    const kidneys = req.body.kidneys;

    // // Validation
    // if (!kidneys || !Array.isArray(kidneys)) {
    //     return res.status(400).send("Invalid input: kidneys should be an array");
    // }

    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
});

// global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"this is monthing else err "
    })
})

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

