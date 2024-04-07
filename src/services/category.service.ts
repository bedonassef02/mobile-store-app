import { Category } from '../models/category.model';
import { CreateCategoryDto } from '../utils/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../utils/dtos/category/update-category.dto';
import { CategoryInstance } from '../utils/instances/category.instance';

export class CategoryService {
  async findAll(): Promise<any> {
    return await Category.findAll();
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<any> {
    return await Category.create(createCategoryDto);
  }

  async findByPk(id: number): Promise<any> {
    return await Category.findByPk(id);
  }

  async findOne(slug: string): Promise<any> {
    return await Category.findOne({ where: { slug } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any> {
    await Category.update(updateCategoryDto, { where: { id } });
    return this.findByPk(id);
  }

  async findSubcategoriesBySlug(slug: string): Promise<any> {
    const category: CategoryInstance | null = await this.findOne(slug);
    if (!category) {
      return null;
    }
    return await Category.findAll({ where: { parentId: category.id } });
  }

  async delete(id: number): Promise<void> {
    await Category.destroy({ where: { id } });
  }

  async isParent(id: number): Promise<boolean> {
    return !!(await Category.findOne({ where: { parentId: id } }));
  }
}
