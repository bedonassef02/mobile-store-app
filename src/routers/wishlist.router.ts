import { Router } from 'express';
import { isAuthMiddleware } from '../utils/middlewares/is-auth.middleware';
import { WishlistController } from '../controllers/wishlist.controller';
import { WishlistService } from '../services/wishlist.service';

export const router: Router = Router();

const wishlistController: WishlistController = new WishlistController(
  new WishlistService(),
);

router.use(isAuthMiddleware);

router.route('/').get(wishlistController.findAll.bind(wishlistController));

router
  .route('/:productId')
  .get(wishlistController.findOne.bind(wishlistController))
  .patch(isAuthMiddleware, wishlistController.toggle.bind(wishlistController));
