import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbName, dbUrl } from "./initialConfig.js";
import chalk from "chalk";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: dbUrl,
  database: dbName,
  entities: ["../entity/**/*.js"],
  synchronize: true,
  authSource: "admin"
});

AppDataSource.initialize()
  .then(async () => {
  console.log(`${chalk.green.bold('Connected')} to the database`);
  })
  .catch((error) =>
      console.log(`${chalk.red.bold('Error')} connecting to database`, error)
  );

export default AppDataSource;
