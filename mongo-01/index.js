const express = require('express');
const bodyParser= require('body-parser');


const app = express();
const adminRoute= require("./routes/admin");
const userRoute= require("./routes/user");
app.use(bodyParser.json());

app.use("/admin",adminRoute);
app.use("/user", userRoute);

const PORT=3000;
app.listen(Port,() =>{
    console.log(`server in running port${PORT}`)
})
