import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbURL } from "./initial.config.js";
import chalk from "chalk";
// import { User } from "../entity/User.js";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: dbURL,
  database: "yonode",
  // entities: [User],
  synchronize: true,
  useUnifiedTopology: true,
});
AppDataSource.initialize()
  .then(async () => {
    console.log("database connected");
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
export default AppDataSource;
