import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.SERVER_PORT || 8000;
export const dbUrl = process.env.DATABASE_URL;
export const dbName = process.env.DATABASE_NAME  || 'yonodeDB';
export const JWT_SECRET = process.env.JWT_SECRET_KEY
export const NODE_ENV = process.env.NODE_ENVIRONMENT