import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.SERVER_PORT || 8000;
export const dbUrl = process.env.DATABASE_URL;
export const dbName = process.env.DATABASE_NAME  || 'yonodeDB';
export const jwtSecret = process.env.JWT_SECRET_KEY;
export const nodeEnv = process.env.NODE_ENVIRONMENT || 'development';