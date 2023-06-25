import express from 'express'
import dotenv from "dotenv"
import DBConnect from './DB-Config/mongodb.js';
import cors from "cors"
dotenv.config()
const app= express();
const port=  9000;
DBConnect();
app.use(cors())

app.get("/",(req,res)=> {
    res.send("Welcome to My BYOA Project")
})

app.listen(port,()=> {
    console.log("server is running....")
})