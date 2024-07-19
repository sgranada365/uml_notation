import { Vehicle } from "./vehicle.abstract";

export abstract class MotorizedVehicle extends Vehicle {
  private isStartedVehicle: boolean;

  constructor(vehicleType: string) {
    super(vehicleType);
    this.isStartedVehicle = false;
  }

  startEngine(): void {
    this.isStartedVehicle = true;
    console.info(`${super.vehicleType} started its engine`);
  }

  get isStarted(): boolean {
    return this.isStartedVehicle;
  }
}
