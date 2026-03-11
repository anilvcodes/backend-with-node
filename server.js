const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('hello from express')
})

app.get('/about', (req, res)=>{
    res.send('this is about route')
})

app.get('/contact', (req, res)=>{
    res.send('contact route')
})


// app.get('/products',(req,res)=>{ 
//     res.json([
//         { id:1, name:'anil k verma', price:500 },
//         { id:2, name:'anil verma', price:500 },
//         { id:3, name:'anil verma', price:500 }
//     ])
// })

// app.get('/products/:id',(req,res)=>{
//     const id = Number(req.params.id)

//     const products = [
//         { id:4, name:'anil k verma', price:500 },
//         { id:5, name:'anil verma', price:500 },
//         { id:3, name:'anil verma', price:500 }
//     ]

//     const reqpro = products.find((product)=> product.id === id)

//     res.json(reqpro)
// })


    const products = [
         { id:1, name:'anil k verma', price:500 },
        { id:2, name:'anil verma', price:500 },
        { id:3, name:'anil verma', price:500 },
        { id:4, name:'anil verma', price:500 }
    ]
app.get('/products',(req,res)=>{ 
    res.json(products)

})
app.get('/products/:id',(req,res)=>{
    const id = Number(req.params.id)

    const reqpro = products.find((product)=> product.id === id)

    res.json(reqpro)
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})