import { BadVehicle } from "./vehicle.bad.abstract";

export class BadBicycle extends BadVehicle {
  constructor() {
    super("BadBicycle");
  }
  startEngine(): void {
    console.error("You can't start a bicycle");
  }
}
