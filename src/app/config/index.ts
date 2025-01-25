import dotenv from 'dotenv';
import path from 'path';
// Dotenv Config
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.MONGODB_URL,
  node_env: process.env.NODE_ENV,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
