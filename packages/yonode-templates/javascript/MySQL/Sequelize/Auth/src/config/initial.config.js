import dotenv from 'dotenv';
dotenv.config();

export const serverPort = process.env.SERVER_PORT || 8000;
export const dbUrl = process.env.DATABASE_URL + process.env.DATABASE_NAME;

