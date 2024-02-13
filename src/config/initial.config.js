import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.SERVER_PORT || 8000;


