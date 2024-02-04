import chalk from "chalk";
import { Sequelize } from "sequelize"
import { databaseHost, databaseName, databasePassword, databasePort, databaseUsername } from './initial.config.js'
export const connectDB = () => {
    const sequelize = new Sequelize(databaseName,databaseUsername,databasePassword,{
        dialect : "mysql",
        host: databaseHost,
        port : databasePort
    });
    sequelize.authenticate()
    .then(() => {
        console.log(`${chalk.green.bold('Connection')} has been established successfully `);
    })
    .catch( (err) => {
        console.error(`${chalk.red.bold('Unable')} to connect to the database`,err);
    })
}