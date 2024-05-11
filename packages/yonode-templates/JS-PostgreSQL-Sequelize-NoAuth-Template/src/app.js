// import the packages
import express from 'express';
import chalk from 'chalk';

// import your files
import { port } from './config/initial.config.js';
import { connectDB } from './config/db.config.js';
import './models/models.js';

// Initializing the app
const app = express();
app.use(express.json());

// User Your Routes here
app.use("/api/helloworld", helloWorldRouter);

// rest of your code here


// database connection
connectDB()

app.listen(port, () => {
    console.log(`${chalk.green.bold('Server')} is listening on port ${port}`);
});
