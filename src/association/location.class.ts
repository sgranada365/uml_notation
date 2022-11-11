export class Location {
  constructor(private latitude: string = "4.710989", private longitude: string = "-74.072090") {}

  public getFullLocation(): string {
    return `${this.latitude} ${this.longitude}`;
  }
}
