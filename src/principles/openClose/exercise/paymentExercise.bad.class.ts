import { PAYMENT_TYPES } from "./paymentTypes";

export class BadPaymentExercise {
  processPayment(method: PAYMENT_TYPES, amount: number): void {
    switch (method) {
      case PAYMENT_TYPES.CREDIT_CARD:
        console.log(`Processing credit card payment of $${amount}`);
        break;
      case PAYMENT_TYPES.PAYPAL:
        console.log(`Processing PayPal payment of $${amount}`);
        break;
      case PAYMENT_TYPES.BITCOIN:
        console.log(`Processing Bitcoin payment of $${amount}`);
        break;
    }
  }
}
