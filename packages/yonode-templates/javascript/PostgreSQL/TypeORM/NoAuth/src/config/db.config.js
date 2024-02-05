import "reflect-metadata";
import { DataSource } from "typeorm";
import {
  databaseHost,
  databaseName,
  databasePassword,
  databasePort,
  databaseUsername,
} from "./initial.config.js";
import chalk from "chalk";

const AppDataSource = new DataSource({
  type: "postgres",
  host: databaseHost,
  username: databaseUsername,
  password: databasePassword,
  port: databasePort,
  database: databaseName,
  synchronize: true,
  logging: false,
  entities: ["../entity/**/*.js"],
});

AppDataSource.initialize()
  .then(async () => {
    console.log(`${chalk.green.bold("Connected")} to the database`);
  })
  .catch((error) =>
    console.log(`${chalk.red.bold("Failed")} to connect the database: ${error}`)
  );

export default AppDataSource;
