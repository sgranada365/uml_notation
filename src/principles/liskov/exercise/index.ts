import { BadPenguinExercise } from "./penguinExercise.bad.class";
import { BadSparrowExercise } from "./sparrowExercise.bad.cladd";

/**
 * Ejercicio de Sustitucion de Liskov
 *
 * Todas las aves pueden volar, ¿o no?
 *
 * ¿Cómo deberíamos refactorizar los diferentes bad exercises
 * para que cumplan con el principio de sustitucion de liskov?
 *
 * Tip: quiza seria bueno crear una clase abstracta FlyingBird?
 */

export const exercise = () => {
  const badPenguin = new BadPenguinExercise();
  const badSparrow = new BadSparrowExercise();
  badPenguin.fly();
  badSparrow.fly();
};
