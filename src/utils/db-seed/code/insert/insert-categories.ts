import { categoryService } from '../../../ioc/services.ioc';
import { CreateCategoryDto } from '../../../dtos/category/create-category.dto';
import { readFile } from '../helper';

export const insertCategories = async () => {
  try {
    const categoriesEntries: CreateCategoryDto[] = readFile('categories.json');

    for (const category of categoriesEntries) {
      await categoryService.create(category);
    }
    console.log('Categories data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Categories data:', error.message);
  }
};
