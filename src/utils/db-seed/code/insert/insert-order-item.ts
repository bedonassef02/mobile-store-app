import { orderItemService } from '../../../ioc/services.ioc';
import { readFile } from '../helper';
import { CreateOrderItemDto } from '../../../dtos/order/create-order-item.dto';

export const insertOrderItems = async () => {
  try {
    const orderItemsEntries: CreateOrderItemDto[] =
      readFile('order-items.json');

    for (const item of orderItemsEntries) {
      await orderItemService.create(item.orderId, [item.productId]);
    }
    console.log('Order Items data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Order Items data:', error.message);
  }
};
