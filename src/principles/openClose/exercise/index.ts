import { Bitcoin } from "./bitcoin.class";
import { CreditCard } from "./creditCard.class";
// import { BadPaymentExercise } from "./paymentExercise.bad.class";
// import { PAYMENT_TYPES } from "./paymentTypes";
import { Paypal } from "./paypal.class";

/**
 * Ejercicio de Open close
 *
 * Se desea implementar una funcionalidad que permita procesar pagos desde diferentes origenes
 *
 * ¿Cómo deberíamos refactorizar el BadPaymentExercise para que cumpla con el principio open close?
 *
 */

export const exercise = () => {
  // const badPayment = new BadPaymentExercise();
  // badPayment.processPayment(PAYMENT_TYPES.CREDIT_CARD, 300);
  // badPayment.processPayment(PAYMENT_TYPES.PAYPAL, 300);
  // badPayment.processPayment(PAYMENT_TYPES.BITCOIN, 300);

  const creditCard = new CreditCard();
  const paypal = new Paypal();
  const bitcoin = new Bitcoin();

  creditCard.processPayment(58500);
  paypal.processPayment(300000);
  bitcoin.processPayment(0.5);
};
