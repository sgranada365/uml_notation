import { Location } from "./location.class";

export class Candidate {
  private location: Location;

  constructor(
    private id: number,
    private name: string,
    private lastName: string
  ) {
    this.location = new Location();
  }

  getCandidateData(): {
    location: string;
    id: number;
    name: string;
    lastName: string;
  } {
    return {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      location: this.location.getFullLocation(),
    };
  }
}
