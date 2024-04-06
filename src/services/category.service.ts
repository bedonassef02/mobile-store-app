import { Category } from "../models/category.mode";

export class CategoryService{
    
    async findAll():Promise<any> {
        return await Category.findAll();
    }
}