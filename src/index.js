import express from "express";
import dotenv from "dotenv";
import connectToDB from "./db/dbconfig.js";
import { app } from "./app.js";

dotenv.config({
  path: "../.env",
});

const port = process.env.PORT;
connectToDB()
  .then(() => {
    app.listen(port || 8080, () => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });
