// import the packages
import express from 'express';
import { port } from './config/initial.config.js';
import chalk from 'chalk'
// Initializing app 
const app = express();
const PORT = port;

// rest of your code here



app.listen(PORT, () => {
    console.log(`${chalk.blue.bold('Server')} is listening on port ${PORT} 🚀`);
});
