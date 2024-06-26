import { Router } from "express";
import {
  CategoryInsert,
  CategoryUpdate,
} from "../../Modules/category/CategoryHandler";
import { categoryController } from "../../Modules/category/CategoryController";

//CategoryRouter is the router for the category routes
export const CategoryRouter = Router(); // Create a new router

CategoryRouter.get("/", categoryController.index);
CategoryRouter.get("/:id", categoryController.show);
CategoryRouter.post("/", CategoryInsert, categoryController.create);
CategoryRouter.put("/", CategoryUpdate, categoryController.update);
CategoryRouter.delete("/:id", categoryController.delete);
