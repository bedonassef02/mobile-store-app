import { WishlistService } from '../services/wishlist.service';
import { Response } from 'express';
import { WishlistDto } from '../utils/dtos/wishlist/wishlist.dto';

export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  async toggle(req: any, res: Response): Promise<void> {
    const userId: number = parseInt(req.user.id, 10);
    const productId: number = parseInt(req.params.productId, 10);
    const createWishlistDto: WishlistDto = { userId, productId };
    const wishlist: WishlistDto =
      await this.wishlistService.toggle(createWishlistDto);
    if (wishlist) {
      res.status(201).json(wishlist);
    } else {
      res
        .status(200)
        .json({ message: `product removed successfully from wishlist` });
    }
  }

  async findAll(req: any, res: Response): Promise<void> {
    const userId: number = req.user.id;
    const wishlist: WishlistDto[] = await this.wishlistService.findAll(userId);
    res.status(200).json(wishlist);
  }

  async findOne(req: any, res: Response): Promise<void> {
    const productId: number = parseInt(req.params.productId, 10);
    const userId: number = req.user.id;
    const wishlist: WishlistDto | null = await this.wishlistService.findOne({
      userId,
      productId,
    });
    if (wishlist) {
      res.status(200).json(wishlist);
    } else {
      res
        .status(200)
        .json({ message: `product id ${productId} not found in wishlist` });
    }
  }
}
