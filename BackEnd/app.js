const express=require("express");
const route=require("./route.js")
const cors=require("cors")
const app=express();

const dotenv=require("dotenv")
dotenv.config({path:"./config.env"});
const port=process.env.port;

app.use(express.json())
app.use(cors())
app.use(route)
app.use('/uploads', express.static('uploads'));

app.listen(port,()=>{
    console.log("server on")
})