export class Location {
  constructor(private latitude: string = "4.710989", private longitude: string = "-74.072090") {}

  public getCity(): string {
    return this.latitude == "4.710989" && this.longitude == "-74.072090" ? `Bogota` : "Medellin";
  }
}
