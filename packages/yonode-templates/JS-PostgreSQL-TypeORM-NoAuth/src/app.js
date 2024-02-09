// import the packages
import express from "express";
import chalk from "chalk";

import { port } from "./config/initial.config.js";
import "./config/db.config.js";

const app = express();
const PORT = port;

// rest of your code here

app.listen(PORT, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
