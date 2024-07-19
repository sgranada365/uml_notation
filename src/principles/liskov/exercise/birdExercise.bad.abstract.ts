export abstract class BadBirdExcercise {
  private birdType: string;

  constructor(birdType: string) {
    this.birdType = birdType;
  }

  fly(): void {
    console.info(`The bird ${this.birdType} is flaying`);
  }
}
