// import the packages
import express from 'express';
import chalk from "chalk";
import { port } from './config/initial.config.js';
import connectDB from './config/db.config.js';

const app = express();

// rest of your code here


// database connection
connectDB();

app.listen(PORT, () => {
    console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
