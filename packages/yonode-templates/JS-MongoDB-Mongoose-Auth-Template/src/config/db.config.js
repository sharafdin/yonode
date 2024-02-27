import mongoose from "mongoose";
import { dbName, dbUrl } from "./initial.config.js";
import chalk from "chalk";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      dbName,
    });
    console.log(`${chalk.green.bold("Connected")} to the database`);
  } catch (error) {
    console.log(`${chalk.red.bold("Error")} connecting to database`, error);
    process.exit(1);
  }
};

export default connectDB;
