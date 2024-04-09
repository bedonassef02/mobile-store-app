import { orderService } from '../../../ioc/services.ioc';
import { readFile } from '../helper';
import { CreateOrderDto } from '../../../dtos/order/create-order.dto';

export const insertOrders = async () => {
  try {
    const ordersEntries: CreateOrderDto[] = readFile('orders.json');

    for (const order of ordersEntries) {
      await orderService.create(order.userId);
    }
    console.log('Orders data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Orders data:', error.message);
  }
};
