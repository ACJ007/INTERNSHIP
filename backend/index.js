// importing  express
const express = require("express");
//initialization
const app = new express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//api creation
app.get('/',(req,res)=>{
    res.json("Hello My Name Is ACJ");
})
app.post('/signup', (req, res) => {
    res.send(req.body.name)
})
//setting port
app.listen(3005,()=>{
    console.log("3005 is running");
})