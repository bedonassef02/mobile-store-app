import { Stripe } from 'stripe';
import { ProductInstance } from '../utils/instances/product.instance';
import { ICreatePaymentSessionInput } from '../utils/interfaces/payment-session.interface';
import {
  createLineItems,
  findOrderProducts,
} from '../utils/helpers/payment-session.helper';

const PAYMENT_SECRET_KEY: string = process.env.PAYMENT_SECRET_KEY || '';

export class PaymentService {
  private readonly stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(PAYMENT_SECRET_KEY);
  }

  async createPaymentSession(orderId: number): Promise<any> {
    const products: ProductInstance[] = await findOrderProducts(orderId);

    // Create a payment session
    return await this.createStripePaymentSession({
      orderId,
      products,
    });
  }

  private async createStripePaymentSession(
    input: ICreatePaymentSessionInput,
  ): Promise<any> {
    const lineItems = createLineItems(input.products);

    return await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `${process.env.APP_URL}/payment/success?orderId=${input.orderId}`,
      cancel_url: `${process.env.APP_URL}/payment/cancel?orderId=${input.orderId}`,
    });
  }
}
