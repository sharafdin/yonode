import "reflect-metadata";
import { DataSource } from "typeorm";
import { EntityName } from "../entity/Entity";
// import chalk from "chalk";
import { dbName, dbUrl } from "./initial.config";

const AppDataSource = new DataSource({
  type: "postgres",
  url: dbUrl,
  database: dbName,
  entities: [EntityName],
});
AppDataSource.initialize()
  .then(async () => {
    console.log(`connected to the database`);
  })
  .catch((error) => console.log(`to connect to the database: ${error}`));
export default AppDataSource;
