import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`Database connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGO CONNECTION ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
