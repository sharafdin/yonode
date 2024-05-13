import chalk from "chalk";
import { Sequelize } from "sequelize"
import { dbUrl } from "./initial.config.js";

export const sequelize = new Sequelize(dbUrl);
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`${chalk.green.bold('Connected')}  to the database`);
        await sequelize.sync();
        console.log(`${chalk.green.bold('Models synced')} successfully`);
    } catch (error) {
        console.log(`${chalk.red.bold('Error')} connecting to database`, error);
        process.exit(1);
    }
}

export default sequelize;
