// import the packages
import express from "express";
import { port } from "./config/initial.config.js";

//import your files
import "./config/db.config.js";

//Initializing your app
const app = express();

// rest of your code here

app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
