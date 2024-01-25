import express from "express";
import dotenv from "dotenv";
import mongooes from "mongoose";
import connectToDB from "./db/dbconfig.js";

dotenv.config({
  path: "../.env",
});

const port = process.env.PORT;
const app=express()
connectToDB()
.then(()=>{
    app.listen(port || 8080, () => {
      console.log(`Server is running on ${port}`);
    });
})



