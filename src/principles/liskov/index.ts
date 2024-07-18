import { BadBicycle } from "./bicycle.bad.class";
import { Bicycle } from "./bicycle.class";
import { BadCar } from "./car.bad.class";
import { Car } from "./car.class";

function main() {
  const badCar = new BadCar();
  const badBicycle = new BadBicycle();
  badCar.startEngine();
  badCar.startMove();
  badBicycle.startEngine();
  badBicycle.startMove();

  console.log();

  const car = new Car();
  const bicycle = new Bicycle();
  car.startEngine();
  car.startMove();
  bicycle.startMove();
}

main();
