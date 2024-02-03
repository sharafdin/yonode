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
});
AppDataSource.initialize()
  .then(async () => {
    console.log(`${chalk.green.bold("Connected")} to the database ✅`);
  })
  .catch((error) => console.log(error));
export default AppDataSource;
