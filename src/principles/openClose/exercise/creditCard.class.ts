import { IPayment } from "./payment.interface";

export class CreditCard implements IPayment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}
