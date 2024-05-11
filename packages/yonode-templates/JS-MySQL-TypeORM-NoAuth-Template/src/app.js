// import the packages
import express from "express";
import chalk from "chalk";

// import your files
import { port } from "./config/initial.config.js";
import "./config/db.config.js";

// Initializing the app
const app = express();
app.use(express.json());


// Use Your Route here

pp.use("/api/helloworld", helloWorldRouter);

// rest of your code here


app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
