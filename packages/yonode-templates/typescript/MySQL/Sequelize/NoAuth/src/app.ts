// import the packages
import express, { Express } from "express";

// import your files
import { port } from "./config/initial.config";

// initializing the app
const app: Express = express();

// rest of your code here

// database connection

app.listen(port, () => {
    console.log(`Server running on http://localhost:/${port}`);
  });