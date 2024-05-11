// import the packages
import express from "express";
import chalk from "chalk";

// import your files
import { port } from "./config/initial.config.js";

// Initializing the app
const app = express();
app.use(express.json());

// rest of your code here

// Use you Routes here
pp.use("/api/helloworld", helloWorldRouter);


app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
