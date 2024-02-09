// import the packages
import express from "express";
import { port } from "./config/initial.config.js";
import AppDataSource from "./config/db.config.js";

const app = express();

// rest of your code here

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
