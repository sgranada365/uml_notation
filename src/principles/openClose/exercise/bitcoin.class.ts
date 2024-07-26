import { IPayment } from "./payment.interface";

export class Bitcoin implements IPayment {
  processPayment(amount: number): void {
    console.log(`Processing Bitcoin payment of $${amount}`);
  }
}
