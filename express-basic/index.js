const express = require("express")
const app = express()

const users=[{
    name:"NK verma",
    kidneys:[{
        healthy:false
    } ]
},


];
app.use(express.json());

app.get("/",function(req,res){
    const NVKidneys = users[0].kidneys;
    const NumberOfKidneys = NVKidneys.length;
    let NumberOfHealhtyKidneys=0;
    for(let i=0;i<NVKidneys.length;i++){
        if(NVKidneys[i].healthy){
            NumberOfHealhtyKidneys=NumberOfHealhtyKidneys+1;
        }
    }
    const NumberOfUnHealhtyKidneys=NumberOfKidneys-NumberOfHealhtyKidneys;
    res.json({
        NumberOfKidneys,
        NumberOfHealhtyKidneys,
        NumberOfUnHealhtyKidneys
    })
    
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    

  users[0].kidneys.push({
    healthy: isHealthy
  });

  res.json({
    msg: "done!"
  });
  
})
app.put("/" ,function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
       
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})
app.delete("/",function(req,res){
    const newKindey=[];
     for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKindey.push({
                healthy:true
            })
        }
     }
     users[0].kidneys=newKindey;
     res.json({msg:"done "})
})

app.listen(3000);