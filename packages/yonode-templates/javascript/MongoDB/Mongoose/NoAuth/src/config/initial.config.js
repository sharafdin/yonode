import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 8000;
export const dbURL = process.env.DATABASE_URL;
export const dbName = process.env.DB_NAME;