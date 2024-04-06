import { Router } from 'express';
import { CategoryService } from '../services/category.service';
import { CategoryController } from '../controllers/category.controller';
import { createCategoryPipe } from '../utils/pipes/categories/create-category.pipe';
import { deleteCategoryPipe } from '../utils/pipes/categories/delete-category.pipe';
import { updateCategoryPipe } from '../utils/pipes/categories/update-category.pipe';

export const router: Router = Router();

const categoryController: CategoryController = new CategoryController(new CategoryService());

router
  .route('/')
  .get(categoryController.findAll.bind(categoryController))
  .post(createCategoryPipe, categoryController.create.bind(categoryController));

router.route('/:slug').get(categoryController.findOne.bind(categoryController));

router
  .route('/:id')
  .patch(updateCategoryPipe, categoryController.update.bind(categoryController))
  .delete(deleteCategoryPipe, categoryController.delete.bind(categoryController));

router.route('/:slug/subcategories').get(categoryController.findSubcategoriesBySlug.bind(categoryController));
