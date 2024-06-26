import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
// import fs from "fs";
import path from "path";

import { router } from "../App/Route/index";
import { LogService } from "../App/Services/Log/LogService";

export const app: Application = express(); // Create a new Express application

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable JSON body parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded body parsing
app.use(express.static(path.join(__dirname, "../public"))) // Serve static files from the public directory

app.use(router); // Use the router for all routes

// Define an error handler for Express
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  new LogService({
    message: err.message,
    source: "Express Error Handler",
  });

  // fs.writeFileSync("error-request.log", err.message, { flag: "a" });

  return res.status(500).send("Something went wrong!");
});
