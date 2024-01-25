import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "../../.env",
});

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_DB}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB Host: ${connection.connection.host}`
    );
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
