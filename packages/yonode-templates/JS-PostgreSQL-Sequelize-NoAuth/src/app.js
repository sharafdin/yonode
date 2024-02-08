// import the packages
import express from 'express';
import chalk from 'chalk';

import { port } from './config/initial.config.js';
import { connectDB } from './config/db.config.js';
import models from './models/models.js';

const app = express();

// rest of your code here


// database connection
connectDB()

app.listen(port, () => {
    console.log(`${chalk.green.bold('Server')} is listening on port ${port} 🚀 `);
});