// import the packages
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import { serverPort } from './config/initial.config.js';
import { connectDB } from './config/db.config.js';

// Initializing app 
const app = express();
const PORT = serverPort;

// rest of your code here
app.use(express.json());
app.use(cors());


// database connection
connectDB()

app.listen(PORT, () => {
    console.log(`${chalk.green.bold('Server')} is listening on  ${PORT} 🚀 `);
});

