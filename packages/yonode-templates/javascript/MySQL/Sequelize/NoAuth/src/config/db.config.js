import chalk from "chalk";
import { Sequelize } from "sequelize"
import { dbUrl } from "./initial.config.js";


export const sequelize = new Sequelize(dbUrl);
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`${chalk.green.bold('Connection')} has been established successfully `);
        await sequelize.sync({ force: true });
        console.log(`${chalk.green.bold('Models synced')} successfully`);
    } catch (err) {
        console.error(`${chalk.red.bold('Unable')} to connect to the database`, err);
    }
}

export default sequelize;