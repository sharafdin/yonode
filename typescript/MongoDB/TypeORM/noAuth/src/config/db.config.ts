import "reflect-metadata";
import { DataSource } from "typeorm";
import { EntityName } from "../entity/Entity";
import { dbName, dbUrl } from "./initial.config";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: dbUrl,
  database: dbName,
  entities: [EntityName],
});
AppDataSource.initialize()
  .then(async () => {
    console.log(`connected to the database`);
  })
  .catch((error) => console.error("Error connecting to database", error));
export default AppDataSource;
