import { cartService } from '../ioc/services.ioc';

export const signUpListener = async (userId: number) => {
  await cartService.create(userId);
};
