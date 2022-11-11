import { Location } from "./location.class";

export class Vacant {
  constructor(private title: string, private city: string = "Medellin") {}

  updateCity(location: Location) {
    this.city = location.getCity();
  }

  getVacantDescrition(): string {
    return `La vacante ${this.title} esta ubicada en ${this.city}`;
  }
}
