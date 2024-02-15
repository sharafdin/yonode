import mongoose from "mongoose";
import { dbName, dbUrl } from "./initial.config";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbUrl, {
      dbName,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectDB;
