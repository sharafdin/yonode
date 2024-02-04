import dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.SERVER_PORT;
export const databaseName = process.env.DATABASE_NAME;
export const databaseUsername = process.env.DATABASE_USERNAME;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseHost = process.env.DATABASE_HOST;
export const databasePort = process.env.DATABASE_PORT;

