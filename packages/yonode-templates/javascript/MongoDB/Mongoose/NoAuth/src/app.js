// import the packages
import express from 'express';
import { port } from './config/initial.config.js';


const PORT = port;

const app = express();

// database connection
connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
});
