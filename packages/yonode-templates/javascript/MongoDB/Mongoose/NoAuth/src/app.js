// import the packages
import express from 'express';
import { port } from './config/initial.config.js';
import connectDB from './config/db.config.js';


const PORT = port;

const app = express();

// database connection
connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
});
