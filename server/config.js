// Load environment variables from .env file (if present)
require('dotenv').config();

module.exports = {
  MONGO_URL: process.env.MONGO_URL || 'Enter your MongoDB url', JWT_SECRET: process.env.JWT_SECRET };
