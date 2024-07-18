export abstract class BadVehicle {
  private isStartedVehicle: boolean;
  private isMoving: boolean;
  private vehicleType: string;

  constructor(vehicleType: string) {
    this.vehicleType = vehicleType;
    this.isStartedVehicle = false;
    this.isMoving = false;
  }

  startEngine(): void {
    this.isStartedVehicle = true;
    console.info(`${this.vehicleType} started its engine`);
  }

  startMove(): void {
    this.isMoving = true;
    console.info(`${this.vehicleType} started to move`);
  }

  get isStarted(): boolean {
    return this.isStartedVehicle;
  }
  get getIsMoving(): boolean {
    return this.isMoving;
  }
}
