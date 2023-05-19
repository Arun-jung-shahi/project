import express from "express";
import dotenv from "dotenv";
import  connectDB  from  "./config/DB.js"
// import  connectDB  from "./config/DB.js";
import authRoutes from './route/authRoute.js'
import morgan from "morgan";
import cors from "cors";

const app =express()

//for port we are getting from .env
dotenv.config()

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//conncting to database
connectDB();


//routes
app.use("/api/v1/auth",authRoutes)

app.get("/",(req,res) =>
{
    res.send("<h1>hello</h1>")
})

const port =process.env.PORT || 8000;
app.listen(port,()=>{
     console.log("listining to port")
}) 