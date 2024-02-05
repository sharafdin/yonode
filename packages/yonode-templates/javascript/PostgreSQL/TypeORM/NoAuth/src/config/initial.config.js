import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 8000;
export const dbURL = process.env.DATABASE_URL;
export const dbName = process.env.DB_NAME;
export const userPass = process.env.USER_PASS;
export const userName = process.env.USER_NAME;
