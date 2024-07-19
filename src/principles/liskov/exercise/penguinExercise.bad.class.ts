import { BadBirdExcercise } from "./birdExercise.bad.abstract";

export class BadPenguinExercise extends BadBirdExcercise {
  constructor() {
    super("Penguin");
  }

  fly(): void {
    console.error(`Error the penguins can't fly`);
  }
}
