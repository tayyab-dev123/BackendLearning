import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
//import mongoose from "mongoose";

dotenv.config({
  path: "./env",
});

const app = express();

connectDB();

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Errorr", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
})();*/
