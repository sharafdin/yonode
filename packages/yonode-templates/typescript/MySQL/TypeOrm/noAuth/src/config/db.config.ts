import "reflect-metadata";
import { DataSource } from "typeorm";
import { EntityName } from "../entity/Entity";
import { dbName, dbUrl } from "./initial.config";

const AppDataSource = new DataSource({
  type: "mysql",
  url: dbUrl,
  database: dbName,
  entities: [EntityName],
});
AppDataSource.initialize()
  .then(async () => {
    console.log(`Connected to the database`);
  })
  .catch((error) => console.error("Error connecting to database", error););
export default AppDataSource;
