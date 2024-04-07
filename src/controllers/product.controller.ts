import { ProductService } from '../services/product.service';
import { Request, Response } from 'express';
import { ProductInstance } from '../utils/instances/product.instance';
import { UpdateProductDto } from '../utils/dtos/product/update-product.dto';
import { CreateProductDto } from '../utils/dtos/product/create-product.dto';

export class ProductController {
  constructor(private productService: ProductService) {}

  async create(req: any, res: Response): Promise<void> {
    const createProductDto: CreateProductDto = req.body;
    const product: ProductInstance =
      await this.productService.create(createProductDto);
    res.status(201).json(product);
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const products: ProductInstance[] = await this.productService.findAll();
    res.status(200).json(products);
  }

  async findOne(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    const product: ProductInstance = await this.productService.findByPk(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(200).json({ message: `product with id ${id} not found` });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    const updateProductDto: UpdateProductDto = req.body;
    const product: ProductInstance = await this.productService.update(
      id,
      updateProductDto,
    );
    res.status(200).json(product);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    await this.productService.delete(id);
    res.status(200).json({ message: 'product deleted successfully' });
  }
}
