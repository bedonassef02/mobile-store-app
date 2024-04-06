import { Request, Response } from 'express';

// Define the interface for the CRUD controller
export interface ICrudController {
  // Method to handle GET requests to retrieve all resources
  findAll(req: Request, res: Response): Promise<void>;

  // Method to handle POST requests to create a new resource
  create(req: Request, res: Response): Promise<void>;

  // Method to handle GET requests to retrieve a single resource by ID or slug
  findOne(req: Request, res: Response): Promise<void>;

  // Method to handle PUT or PATCH requests to update a resource
  update(req: Request, res: Response): Promise<void>;

  // Method to handle DELETE requests to remove a resource
  delete(req: Request, res: Response): Promise<void>;
}
