// Import required modules and configuration
import chalk from "chalk";
import { Sequelize } from "sequelize";
import { dbUrl } from "./initialConfig.js";

const sequelize = new Sequelize(dbUrl);
// Async function to connect to the MongoDB database
export const connectDB = async () => {
  try {
    // Connect to the database with the provided URL and name
    await sequelize.authenticate();
    // Log success message in green
    console.log(`${chalk.green.bold("Connected")} to the database`);
    await sequelize.sync();
    console.log(`${chalk.green.bold("Models synced")} successfully`);
  } catch (error) {
    // Log error message in red and exit the application
    console.log(`${chalk.red.bold("Error")} connecting to database `, error);
    process.exit(1);
  }
};
// Export the connectDB function
export default sequelize;
