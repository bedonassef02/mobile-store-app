import { ProductInstance } from '../instances/product.instance';

export interface ICreatePaymentSessionInput {
  orderId: number;
  products: ProductInstance[];
}
