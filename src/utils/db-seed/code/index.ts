import { insertCategories } from './insert/insert-categories';
import { insertProducts } from './insert/insert-products';
import { insertImages } from './insert/insert-images';
import { insertUsers } from './insert/insert-users';
import { insertCartProducts } from './insert/insert-cart-products';
import { insertOrders } from './insert/insert-orders';
import { insertOrderItems } from './insert/insert-order-item';
import { insertWishlists } from './insert/insert-wishlists';

export const seedDatabase = async (): Promise<void> => {
  const isSeedEnabled: boolean = process.env.ENABLE_SEED === 'true';

  console.log(`Seeding is ${isSeedEnabled ? 'enabled' : 'disabled'}.`);

  if (isSeedEnabled) {
    await insertCategories();
    await insertProducts();
    await insertImages();
    await insertUsers();
    await insertCartProducts();
    await insertOrders();
    await insertOrderItems();
    await insertWishlists();
  }
};
