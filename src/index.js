import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
//import mongoose from "mongoose";

dotenv.config({
  path: "./env",
});

const app = express();

// Call the connectDB function, which is presumably defined elsewhere in your code.
// This function is expected to return a Promise that resolves when the database connection is successful.
connectDB()
  // The `then` method is called when the Promise returned by connectDB resolves, i.e., when the database connection is successful.
  .then(() => {
    // The process.env.PORT expression is not doing anything here. It looks like there might be a mistake in your code.
    // If you intended to start a server listening on this port, you might need to call a function like app.listen.
    process.env.PORT,
      // This function is defined but never called. It logs a message to the console indicating the port number the app is listening on.
      () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      };
  })
  // The `catch` method is called when the Promise returned by connectDB is rejected, i.e., when the database connection fails.
  .catch((err) => {
    // Log the error message to the console.
    console.log(`MongoDB Error connection ${err}`);
  });

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
