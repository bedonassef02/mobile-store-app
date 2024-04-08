import { cartProductService, cartService } from '../../ioc/services.ioc';
import { CartInstance } from '../../instances/cart.instance';
import { CreateCartProductDto } from '../../dtos/cart/create-cart-product.dto';
import { Response, NextFunction } from 'express';

export const createCartProductPipe = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.user.id;
  const cart: CartInstance = await cartService.findOne(userId);
  const cartProducts: CreateCartProductDto[] = await cartProductService.findAll(
    cart.id,
  );
  if (cartProducts.length === 0) {
    return res.status(400).json({
      message: `you can't make order while there are no cart products`,
    });
  }
  next();
};
