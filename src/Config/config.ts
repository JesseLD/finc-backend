import dotenv from "dotenv";
dotenv.config();

const config = {
  apiUrl: "http://localhost:3000/api",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "secret",
  jwtExpiration: process.env.JWT_EXPIRATION || "1d",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME || "test",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
  },
};

export default config;
