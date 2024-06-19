import { LlcRouter } from "./v0/llcRouter";
import { AsdfghRouter } from "./v0/asdfghRouter";
import { MonkRouter } from "./v0/monkRouter";
import { RzRouter } from "./v0/rzRouter";
// import { KkkRouter } from "./v0/kkkRouter";

import { Router, Request, Response } from "express";
import { ServiceResponse } from "../Services/ServiceResponse";
import { MSCRouter } from "./v0/moneySpendingCategoryRouter";

export const router = Router(); // Create a new router

// Use the money spending category router
router.use("/MoneySpendingCategories", MSCRouter);





// Define a default route that returns a 404 error for any unknown routes
router.use((req: Request, res: Response) => {
  return new ServiceResponse({
    success: false, 
    message: "Route not found",
    status: 404,
    response: res,
  });
});