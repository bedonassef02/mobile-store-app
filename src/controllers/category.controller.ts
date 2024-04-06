import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from '../utils/dtos/category/create-category.dto';
import { CategoryInstance } from '../utils/instances/category.instance';

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    const categories: CategoryInstance[] = await this.categoryService.findAll();
    res.status(200).json(categories);
  }

  async create(req: Request, res: Response): Promise<void> {
    const createCategoryDto: CreateCategoryDto = req.body;
    const category: CategoryInstance = await this.categoryService.create(createCategoryDto);
    res.status(201).json(category);
  }

  async findOne(req: Request, res: Response): Promise<void> {
    const slug: string = req.params.slug;
    const category: CategoryInstance | null = await this.categoryService.findOne(slug);
    if (category) {
      res.status(200).send(category);
    } else {
      res.status(404).send({ message: `no category found for ${slug}` });
    }
  }

  async findSubcategoriesBySlug(req: Request, res: Response): Promise<void> {
    const slug: string = req.params.slug;
    const subCategories: CategoryInstance[] | null = await this.categoryService.findSubcategoriesBySlug(slug);
    if (!subCategories) {
      res.status(404).json({ message: `Category ${slug} not found` });
    } else {
      res.status(200).json(subCategories);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    const updateCategoryDto = req.body;
    const category: CategoryInstance = await this.categoryService.update(id, updateCategoryDto);
    res.status(200).json(category);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    await this.categoryService.delete(id);
    res.status(200).json({ message: 'Category deleted successfully' });
  }
}
