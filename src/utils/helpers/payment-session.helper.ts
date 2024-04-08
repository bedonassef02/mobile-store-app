import { ProductInstance } from '../instances/product.instance';
import { CreateOrderItemDto } from '../dtos/order/create-order-item.dto';
import { orderItemService, productService } from '../ioc/services.ioc';

export const createLineItems = (products: ProductInstance[]): any => {
  return products.map((product) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
          images: [product.coverImage],
        },
        unit_amount: product.price * 100,
      },
      quantity: 1,
    };
  });
};

export const findOrderProducts = async (
  orderId: number,
): Promise<ProductInstance[]> => {
  const orderItems: CreateOrderItemDto[] =
    await orderItemService.findAll(orderId);

  const productPromises = orderItems.map((item) =>
    productService.findByPk(item.productId),
  );

  return await Promise.all(productPromises);
};
