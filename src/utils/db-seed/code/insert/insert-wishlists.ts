import { wishlistService } from '../../../ioc/services.ioc';
import { readFile } from '../helper';
import { WishlistDto } from '../../../dtos/wishlist/wishlist.dto';

export const insertWishlists = async () => {
  try {
    const wishlistsEntries: WishlistDto[] = readFile('wishlists.json');

    for (const wishlist of wishlistsEntries) {
      await wishlistService.toggle(wishlist);
    }
    console.log('Wishlists data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Wishlists data:', error.message);
  }
};
