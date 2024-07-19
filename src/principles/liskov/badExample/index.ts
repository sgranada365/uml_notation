import { BadBicycle } from "./bicycle.bad.class";
import { BadCar } from "./car.bad.class";

export const badExample = () => {
  const badCar = new BadCar();
  const badBicycle = new BadBicycle();
  badCar.startEngine();
  badCar.startMove();
  badBicycle.startEngine();
  badBicycle.startMove();
};
