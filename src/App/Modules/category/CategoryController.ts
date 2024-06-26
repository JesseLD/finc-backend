import { ServiceResponse } from "../../Services/ServiceResponse";
import { Request, Response } from "express";

class CategoryController {
  public async create(req: Request, res: Response): Promise<void> {
    // Create a new money spending category
    new ServiceResponse({
      message: "Category created successfully",
      status: 200,
      response: res,
    });
  }

  public async index(req: Request, res: Response): Promise<void> {
    // Get all money spending categories
    new ServiceResponse({
      message: "Category fetched successfully",
      status: 200,
      response: res,
    });
  }

  public async show(req: Request, res: Response): Promise<void> {
    // Get a single money spending category
    new ServiceResponse({
      message: "Category fetched successfully",
      status: 200,
      response: res,
    });
  }

  public async update(req: Request, res: Response): Promise<void> {
    // Update a money spending category
    new ServiceResponse({
      message: "Category updated successfully",
      status: 200,
      response: res,
    });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    // Delete a money spending category
    new ServiceResponse({
      message: "Category deleted successfully",
      status: 200,
      response: res,
    });
  }
}


export const categoryController = new CategoryController();
