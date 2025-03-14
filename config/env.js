import { config } from "dotenv";
import process from 'node:process';

config({ path: '.env' });

export const { 
    PORT,
    SERVER_URL, 
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_KEY,
    ARCJET_ENV,
    QSTASH_URL,
    QSTASH_TOKEN,
    QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY,
    EMAIL_PASSWORD,
    EMAIL
} = process.env;