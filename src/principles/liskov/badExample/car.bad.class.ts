import { BadVehicle } from "./vehicle.bad.abstract";

export class BadCar extends BadVehicle {
  constructor() {
    super("BadCar");
  }
}
