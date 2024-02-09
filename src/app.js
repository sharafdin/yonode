// import the packages
import express from "express";
import chalk from "chalk";

//import your files
import { port } from "./config/initial.config.js";
import "./config/db.config.js";

//initializing the app
const app = express();

// rest of your code here

app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
