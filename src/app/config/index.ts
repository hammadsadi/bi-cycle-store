import dotenv from 'dotenv';
import path from 'path';
// Dotenv Config
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.MONGODB_URL,
};
