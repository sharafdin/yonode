// import the packages
import express from "express";
import { port } from "./config/initial.config.js";
import AppDataSource from "./config/db.config.js";

const PORT = port;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
});
