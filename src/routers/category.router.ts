import { Router } from 'express';
import { CategoryService } from '../services/category.service';
import { CategoryController } from '../controllers/category.controller';

export const router = Router();

const categoryController = new CategoryController(new CategoryService());

router.get('/', categoryController.findAll.bind(categoryController));