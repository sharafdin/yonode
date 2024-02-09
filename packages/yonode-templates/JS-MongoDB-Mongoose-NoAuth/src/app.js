// import the packages
import express from 'express';
import chalk from "chalk";

// import your files
import { port } from './config/initial.config.js';
import connectDB from './config/db.config.js';

// Initializing the app
const app = express();

// rest of your code here


// database connection
connectDB();

app.listen(port, () => {
    console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
