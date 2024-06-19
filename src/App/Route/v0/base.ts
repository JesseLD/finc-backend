import { Router } from "express";
import {
  BaseInsert,
  BaseUpdate,
} from "../../Modules/base/baseHandler";
import { baseController } from "../../Modules/base/baseController";

//BaseRouter is the router for the base routes
export const BaseRouter = Router(); // Create a new router

BaseRouter.get("/", baseController.index);
BaseRouter.get("/:id", baseController.show);
BaseRouter.post("/", BaseInsert, baseController.create);
BaseRouter.put("/", BaseUpdate, baseController.update);
BaseRouter.delete("/:id", baseController.delete);
