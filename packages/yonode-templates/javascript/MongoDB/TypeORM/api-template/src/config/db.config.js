import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbURL } from "./initial.config.js";
import chalk from "chalk";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: dbURL,
  database: "yonode",
  entities: ["./src/entity/**/*.js"],
  synchronize: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log(`${chalk.green.bold("Connected")} to the database ✅`);
  })
  .catch((err) => {
    console.log(`${chalk.red.bold("Error")} connecting to database`, err);
  });

export default AppDataSource;
