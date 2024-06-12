import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  node_env: process.env.NODE_ENV,
};
