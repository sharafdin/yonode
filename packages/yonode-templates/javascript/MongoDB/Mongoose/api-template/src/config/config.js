import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 8000;
export const dbURL = process.env.DATABASE_URL;
export const JWT_Secret = process.env.JWT_SECRET_KEY;
export const Web_Url = process.env.WEB_URL

// email
export const emailService = process.env.SERVICE
export const emailUser = process.env.USER
export const emailPass = process.env.PASS
export const emailFrom = process.env.FROM