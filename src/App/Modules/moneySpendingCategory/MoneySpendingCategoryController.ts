import { ServiceResponse } from "../../Services/ServiceResponse";
import { Request, Response } from "express";

class MoneySpendingCategoryController {
  public async create(req: Request, res: Response): Promise<void> {
    // Create a new money spending category
    new ServiceResponse({
      message: "Money spending category created successfully",
      status: 200,
      response: res,
    });
  }

  public async index(req: Request, res: Response): Promise<void> {
    // Get all money spending categories
    new ServiceResponse({
      message: "Money spending categories fetched successfully",
      status: 200,
      response: res,
    });
  }

  public async show(req: Request, res: Response): Promise<void> {
    // Get a single money spending category
    new ServiceResponse({
      message: "Money spending category fetched successfully",
      status: 200,
      response: res,
    });
  }

  public async update(req: Request, res: Response): Promise<void> {
    // Update a money spending category
    new ServiceResponse({
      message: "Money spending category updated successfully",
      status: 200,
      response: res,
    });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    // Delete a money spending category
    new ServiceResponse({
      message: "Money spending category deleted successfully",
      status: 200,
      response: res,
    });
  }
}


export const moneySpendingCategoryController = new MoneySpendingCategoryController();
