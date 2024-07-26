import { IPayment } from "./payment.interface";

export class Paypal implements IPayment {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}
