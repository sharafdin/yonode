// import the packages
import express from 'express';
import { port } from './config/initial.config.js';
import connectDB from './config/db.config.js';

const app = express();
const PORT = port;

// rest of your code here


// database connection
connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
});
