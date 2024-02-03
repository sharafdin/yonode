// import the packages
import express from "express";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import { port } from "./config/initial.config.js";

import cors from "cors";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";

import AppDataSource from "./config/db.config.js";
import routerName from "./routes/router.js";

const PORT = port;
const app = express();

app.use(express.json());
app.use("/api/v1/", routerName);

app.listen(PORT, () => {
  console.log(process.env.PORT);
  console.log(
    `${chalk.green.bold("Server")} is listening on port ${chalk.green.bold(
      PORT
    )} 🚀`
  );
});
