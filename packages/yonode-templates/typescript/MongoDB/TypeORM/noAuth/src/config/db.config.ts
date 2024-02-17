import "reflect-metadata";
import { DataSource } from "typeorm";
import { EntityName } from "../entity/Entity";
import chalk from "chalk";
import { dbName, dbUrl } from "./initial.config";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: dbUrl,
  database: dbName,
  synchronize: true,
  logging: false,
  entities: [EntityName],
  migrations: [],
  subscribers: [],
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
