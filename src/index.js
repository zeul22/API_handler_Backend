import express from "express";
import dotenv from "dotenv";
import mongooes from "mongoose";
import connectToDB from "./db/dbconfig.js";

dotenv.config({
  path: "../.env",
});

const port = process.env.PORT;
const app=express()
connectToDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
