// import the packages
import express from "express";
import chalk from "chalk";

import { port } from "./config/initial.config.js";
import "./config/db.config.js";

const app = express();

// rest of your code here

app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
