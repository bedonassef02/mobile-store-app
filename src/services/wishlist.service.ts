import { Wishlist } from '../models/wishlist.model';
import { WishlistDto } from '../utils/dtos/wishlist/wishlist.dto';

export class WishlistService {
  async findAll(userId: number): Promise<any> {
    return await Wishlist.findAll({ where: { userId } });
  }

  async findOne(wishlistDto: WishlistDto): Promise<any> {
    return await Wishlist.findOne({ where: wishlistDto });
  }

  async toggle(wishlistDto: WishlistDto): Promise<any> {
    const wishlist = await this.findOne(wishlistDto);
    if (!wishlist) {
      return await this.create(wishlistDto);
    } else {
      await this.delete(wishlistDto);
    }
  }

  private async create(wishlistDto: WishlistDto): Promise<any> {
    return await Wishlist.create(wishlistDto);
  }

  private async delete(wishlistDto: WishlistDto): Promise<any> {
    await Wishlist.destroy({ where: wishlistDto });
  }
}
