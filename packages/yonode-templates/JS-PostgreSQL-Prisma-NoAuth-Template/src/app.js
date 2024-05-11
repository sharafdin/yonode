// import the packages
import express from "express";
import chalk from "chalk";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import compression from "compression";
import cookieParser from "cookie-parser";

// import your files
import { port } from "./config/initialConfig.js";
import helloWorldRouter from "./routes/helloWorldRoutes.js";

// Initializing the app
const app = express();
app.use(cookieParser());
// Essential security headers with Helmet
app.use(helmet());

// Enable CORS with default settings
app.use(cors());

// Logger middleware for development environment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(compression()); // Compress all routes

// Rate limiting to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Built-in middleware for parsing JSON
app.use(express.json());

// Use your routes here
app.use("/api/helloworld", helloWorldRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error(chalk.red(err.stack));
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: {},
  });
});




app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});