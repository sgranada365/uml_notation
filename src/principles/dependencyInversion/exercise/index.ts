import { NotificationExercise } from "./notificationExercise.bad.class";

/**
 * Ejercicio de Inversion de dependencias
 * 
 * ¿Como deberiamos refactorizar este notificador para que cumpla
 * con el principio de inversion de dependencias?
 */

export const exercise = () => {
  const notificator = new NotificationExercise();
  notificator.notify("I'm an email message");
};
