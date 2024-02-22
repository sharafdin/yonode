// import the packages
import express, { Express } from "express";

// import your files
import { port } from "./config/initial.config";


// Initializing the app
const app: Express = express();
app.use(express.json());

// rest of your code here


app.listen(port, () => {
  console.log(`Server running on http://localhost:/${port}`);
});
