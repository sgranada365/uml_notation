import { BadPaymentExercise } from "./paymentExercise.bad.class";
import { PAYMENT_TYPES } from "./paymentTypes";

/**
 * Ejercicio de Open close
 *
 * Se desea implementar una funcionalidad que permita procesar pagos desde diferentes origenes
 *
 * ¿Cómo deberíamos refactorizar el BadPaymentExercise para que cumpla con el principio open close?
 *
 */

export const exercise = () => {
  const badPayment = new BadPaymentExercise();
  badPayment.processPayment(PAYMENT_TYPES.CREDIT_CARD, 300);
  badPayment.processPayment(PAYMENT_TYPES.PAYPAL, 300);
  badPayment.processPayment(PAYMENT_TYPES.BITCOIN, 300);
};
