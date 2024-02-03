// import the packages
import express from "express";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import { port } from "./config/initial.config.js";

import cors from "cors";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";

import userRouter from "./routes/user.router.js";
import AppDataSource from "./config/db.config.js";

AppDataSource.initialize()
  .then(() => {
    console.log(`${chalk.green.bold("Connected")} to the database ✅`);
    const PORT = port;

    const app = express();

    app.use(morgan("dev"));

    var whitelist = ["http://localhost:8000"];

    var corsOptionsDelegate = function (req, callback) {
      var corsOptions;
      if (whitelist.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true };
      } else {
        corsOptions = { origin: false };
      }
      callback(null, corsOptions);
    };

    app.use(cors(corsOptionsDelegate));
    app.use(express.json());
    app.use(helmet());
    app.use(cookieParser());

    const apiRateLimit = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 10,
      message: "Rate limit exceeded",
    });

    app.use(apiRateLimit);

    // route management
    app.use("/api/v1/users", userRouter);

    app.listen(PORT, () => {
      console.log(process.env.PORT);
      console.log(
        `${chalk.green.bold("Server")} is listening on port ${chalk.green.bold(
          PORT
        )} 🚀`
      );
    });
  })
  .catch((err) => {
    console.log(`${chalk.red.bold("Error")} connecting to database`, err);
  });
