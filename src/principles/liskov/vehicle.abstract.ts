export abstract class Vehicle {
  private isMoving: boolean;
  private _vehicleType: string;

  constructor(vehicleType: string) {
    this.isMoving = false;
    this._vehicleType = vehicleType;
  }

  startMove(): void {
    this.isMoving = true;
    console.info(`${this._vehicleType} started to move`);
  }

  get getIsMoving(): boolean {
    return this.isMoving;
  }

  get vehicleType(): string {
    return this._vehicleType;
  }
}
