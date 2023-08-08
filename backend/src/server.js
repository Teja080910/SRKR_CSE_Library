const express=require("express");
const cors=require("cors");
const pool=require("./db")
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',async(req,res)=>{
    res.send("server running")
})


app.post('/insert',async(req,res)=>
{
    const {name,email}=req.body;
    const details=await pool.query('insert into login (name,email) values("${name}","${email}") ;');
    res.json(details)
})

app.listen(8000,()=>{console.log("server running at 8000")})