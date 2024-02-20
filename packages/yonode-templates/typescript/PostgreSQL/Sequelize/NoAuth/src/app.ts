// import packages
import express , { Express } from 'express';

// import files
import { port } from './config/initial.config';


// Initialize app
const app:Express = express();
app.use(express.json());

// // rest of your code here

// database connection

app.listen(port, () => {
    console.log(`Server running on http://localhost:/${port}`);
});