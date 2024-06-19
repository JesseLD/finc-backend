import { Router } from "express";
import {
  MSCSInsert,
  MSCSUpdate,
} from "../../Modules/moneySpendingCategory/MoneySpendingRequestHandler";
import { moneySpendingCategoryController } from "../../Modules/moneySpendingCategory/MoneySpendingCategoryController";

//MSCRouter is the router for the money spending category routes
export const MSCRouter = Router(); // Create a new router

MSCRouter.get("/", moneySpendingCategoryController.index);
MSCRouter.get("/:id", moneySpendingCategoryController.show);
MSCRouter.post("/", MSCSInsert, moneySpendingCategoryController.create);
MSCRouter.put("/", MSCSUpdate, moneySpendingCategoryController.update);
MSCRouter.delete("/:id", moneySpendingCategoryController.delete);
