import { Mail } from "./mail.class";
import { User } from "./user.class";
import { BadUserExercise } from "./userExercise.bad";

/**
 * Ejercicio de responsabilidad única
 *
 * Necesitamos una forma de guardar y borrar un usuario en la base de datos.
 * Necesitamos una forma de enviar emails.
 *
 * ¿Cómo deberíamos refactorizar el BadUserExercise para que cumpla con el principio de responsabilidad única?
 *
 * Tip: quizás deberíamos empezar creando una clase llamada User.
 */

export const exercise = () => {
  // const badUser = new BadUserExercise("Juan", "test@test.com");
  // badUser.save();
  // badUser.delete();
  // badUser.sendEmail("I'm the bad message");

  const user = new User("Juanito Alcachofa", "test@test.com");
  user.save();
  user.delete();
  const mail = new Mail();
  mail.sendEmail(user.getEmail(), "Hallo Leute!");
};
