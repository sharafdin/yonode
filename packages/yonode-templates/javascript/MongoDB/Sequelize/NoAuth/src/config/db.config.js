import { dbURL } from "./initial.config.js";
import chalk from "chalk";

const connectDB = async () => {
    try {
        console.log(`${chalk.green.bold('Connected')} to the database ✅`);
    } catch (err) {
        console.log(`${chalk.red.bold('Error')} connecting to database`, err);
        process.exit(1);
    }
};

export default connectDB;