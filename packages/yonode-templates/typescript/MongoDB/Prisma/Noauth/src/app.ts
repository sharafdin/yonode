// import the packages
import express, { Express } from "express";
import { port } from "config/initial.config";
import routerName from "routes/router.js";

// import your files

// initializing the app
const app: Express = express();
app.use(express.json());

// rest of your code here

app.use("/api/", routerName);

app.listen(port, () => {
  console.log(`Server running on http://localhost:/${port}/`);
});
