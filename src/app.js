// import the packages
import express from "express";
import { port } from "./config/initial.config.js";
import chalk from "chalk";

//import your files
import "./config/db.config.js";

//Initializing your app
const app = express();
app.use(express.json())
// rest of your code here

app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
