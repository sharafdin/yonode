import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbName, dbURL } from "./initial.config.js";
import chalk from "chalk";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: dbUrl,
  database: dbName,
  entities: ["../entity/**/*.js"],
  synchronize: true,
});

AppDataSource.initialize()
  .then(async () => {
    console.log(
      `${chalk.green.bold("Successfully")} connected to the database`
    );
  })
  .catch((error) =>
    console.log(
      `${chalk.red.bold("Failed")} to connect to the database: ${error}`
    )
  );

export default AppDataSource;
