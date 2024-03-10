import chalk from "chalk";
import { Sequelize } from "sequelize";
import { dbUrl } from "./initialConfig.js";

const sequelize = new Sequelize(dbUrl);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`${chalk.green.bold("Connected")} to the database`);
    await sequelize.sync();
    console.log(`${chalk.green.bold("Models synced")} successfully`);
  } catch (error) {
    console.log(`${chalk.red.bold("Error")} connecting to database `, error);
  }
};

export default sequelize;
