import { Bicycle } from "./bicycle.class";
import { Car } from "./car.class";

export const goodExample = () => {
  const car = new Car();
  const bicycle = new Bicycle();
  car.startEngine();
  car.startMove();
  bicycle.startMove();
};
