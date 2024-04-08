import { CartProductService } from '../services/cart-product.service';
import { Request, Response } from 'express';
import { CreateCartProductDto } from '../utils/dtos/cart/create-cart-product.dto';

export class CartProductController {
  constructor(private cartProductService: CartProductService) {}

  async findAll(req: any, res: Response): Promise<void> {
    const cartId: number = parseInt(req.params.cartId);
    const cartProducts = await this.cartProductService.findAll(cartId);
    res.status(200).json(cartProducts);
  }

  async create(req: Request, res: Response): Promise<void> {
    const cartId: number = parseInt(req.params.cartId, 10);
    const cartProductDto: CreateCartProductDto = req.body;
    cartProductDto.cartId = cartId;
    const cartProduct = await this.cartProductService.create(cartProductDto);
    res.status(201).json(cartProduct);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const productId: number = parseInt(req.params.productId, 10);
    const cartId: number = parseInt(req.params.cartId, 10);
    await this.cartProductService.delete(cartId, productId);
    res
      .status(200)
      .json({ message: `Successfully deleted ${productId} from cart` });
  }
}
