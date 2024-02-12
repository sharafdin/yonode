import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

export const port = process.env.SERVER_PORT || 8000;

export const prisma = new PrismaClient();
