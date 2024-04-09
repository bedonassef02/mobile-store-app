import { Product } from '../models/product.model';
import { CreateProductDto } from '../utils/dtos/product/create-product.dto';
import { UpdateProductDto } from '../utils/dtos/product/update-product.dto';
import { ImageService } from './image.service';
import { redis } from '../config/redis.config';

export class ProductService {
  constructor(private imageService: ImageService) {}

  async findAll(): Promise<any> {
    const cahchedProducts: string | null = await redis.get('products');
    if (cahchedProducts) {
      return JSON.parse(cahchedProducts);
    }
    const products =  await Product.findAll();
    await redis.set('products', JSON.stringify(products));
    return products;
  }

  async create(createProductDto: CreateProductDto): Promise<any> {
    const product: any = await Product.create(createProductDto);
    await this.imageService.create(product.id, createProductDto.images || []);
    await this.updateCache();
    return product;
  }

  async findByPk(id: number): Promise<any> {
    return await Product.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    await Product.update(updateProductDto, { where: { id } });
    await this.updateCache();
    return this.findByPk(id);
  }

  async delete(id: number): Promise<void> {
    await Product.destroy({ where: { id } });
    await this.updateCache();
  }

  private async updateCache(): Promise<void> {
    await redis.del('products');
  }
}
