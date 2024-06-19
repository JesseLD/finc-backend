import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";

import { router } from "../App/Route/index";

export const app: Application = express(); // Create a new Express application
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable JSON body parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded body parsing

app.use(router); // Use the router for all routes

// Define an error handler for Express
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("[Express Error Handler] ", err.message);
  return res.status(500).send("Something went wrong!");
});
