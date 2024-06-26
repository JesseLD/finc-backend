import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { ServiceResponse } from "../../Services/ServiceResponse";

// Schemas for validation
const CategorySchemaInsert = z.object({
  name: z.string(),
});

const CategorySchemaUpdate = z.object({
  id: z.number(),
  name: z.string(),
});

//MSCSInsert and MSCSUpdate are middleware functions for validating the request body

// Middleware for insert validation
function CategoryInsert(req: Request, res: Response, next: NextFunction) {
  const result = CategorySchemaInsert.safeParse(req.body);
  const errors: string[] = [];
  if (!result.success) {
    result.error.errors.forEach((err) => {
      const msg = `${err.path.join(".")} ${err.message}`;
      errors.push(msg.toLowerCase());
    });

    return new ServiceResponse({
      success: false,
      message: "Validation error",
      status: 400,
      response: res,
      data: errors,
    });
  }
  req.body = result;
  next();
}

// Middleware for update validation
function CategoryUpdate(req: Request, res: Response, next: NextFunction) {
  const result = CategorySchemaUpdate.safeParse(req.body);
  const errors: string[] = [];

  if (!result.success) {
    result.error.errors.forEach((err) => {
      const msg = `${err.path.join(".")} ${err.message}`;
      errors.push(msg.toLowerCase());
    });

    return new ServiceResponse({
      success: false,
      message: "Validation error",
      status: 400,
      response: res,
      data: errors,
    });
  }
  req.body = result.data;
  next();
}

export { CategoryInsert, CategoryUpdate };
