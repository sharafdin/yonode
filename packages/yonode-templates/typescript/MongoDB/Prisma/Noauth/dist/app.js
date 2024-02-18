// import the packages
import express from "express";
import { port } from "config/initial.config";
// import your files
// initializing the app
const app = express();
app.use(express.json());
// rest of your code here
app.listen(port, () => {
    console.log(`Server running on http://localhost:/${port}/`);
});
//# sourceMappingURL=app.js.map