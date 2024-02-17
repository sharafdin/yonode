// import the packages
import express, { Express } from "express";

// import your files


// initializing the app
const app: Express = express();
app.use(express.json());

// rest of your code here

// database connection
const port = 8000

app.listen(port, () => {
  console.log(`Server running on http://localhost:/${port}/`);
});
