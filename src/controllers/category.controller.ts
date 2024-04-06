import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController{
  constructor(private categoryService:CategoryService){
  }
  async findAll(req: Request, res: Response) {
    const categories = await this.categoryService.findAll();
    res.status(200).json(categories);
  }

}