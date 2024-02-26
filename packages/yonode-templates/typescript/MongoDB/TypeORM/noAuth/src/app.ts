// import the packages
import express, { Express } from "express";

// import your files
import { port } from "./config/initial.config";
import "./config/db.config";
import routerName from "routes/route";

// initializing the app
const app: Express = express();
app.use(express.json());
app.use("/api/", routerName);
// rest of your code here

app.listen(port, () => {
  console.log(`Server running on http://localhost:/${port}/`);
});
