// import the packages
import express, { Express } from "express";

// import your files
import { port } from "./config/initial.config";
import { connectDB } from "./config/db.config";
import "./models/models"
// initializing the app
const app: Express = express();
app.use(express.json());

// rest of your code here

// database connection
connectDB();

app.listen(port, () => {
    console.log(`Server running on http://localhost:/${port}`);
});