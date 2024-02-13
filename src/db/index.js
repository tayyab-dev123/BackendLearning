// Import the mongoose library, which is used to interact with MongoDB.
import mongoose from "mongoose";

// Import the DB_NAME constant from the constants.js file.
import { DB_NAME } from "../contants.js";

// Define an asynchronous function named connectDB.
const connectDB = async () => {
  // Use a try/catch block to handle potential errors.
  try {
    // Await the result of mongoose.connect, which returns a Promise that resolves to a connection instance.
    // The connection string is constructed using the MONGO_URI environment variable and the DB_NAME constant.
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    // If the connection is successful, log a message to the console with the host of the connection.
    console.log(`Database connected ${connectionInstance.connection.host}`);
  } catch (error) {
    // If an error occurs during the connection, log the error message to the console.
    console.log("MONGO CONNECTION ERROR", error);

    // Exit the process with a failure status code (1).
    process.exit(1);
  }
};

// Export the connectDB function as the default export of this module.
export default connectDB;
