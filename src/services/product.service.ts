import { Product } from '../models/product.model';
import { CreateProductDto } from '../utils/dtos/product/create-product.dto';
import { UpdateProductDto } from '../utils/dtos/product/update-product.dto';
import { ImageService } from './image.service';

export class ProductService {
  constructor(private imageService: ImageService) {}

  async findAll(): Promise<any> {
    return await Product.findAll();
  }

  async create(createProductDto: CreateProductDto): Promise<any> {
    const product: any = await Product.create(createProductDto);
    await this.imageService.create(product.id, createProductDto.images || []);
    return product;
  }

  async findByPk(id: number): Promise<any> {
    return await Product.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    await Product.update(updateProductDto, { where: { id } });
    return this.findByPk(id);
  }

  async delete(id: number): Promise<void> {
    await Product.destroy({ where: { id } });
  }
}
