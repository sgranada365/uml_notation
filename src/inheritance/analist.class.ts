import { User } from "./user.abstract";


export class Analist extends User {
  constructor(name: string, lastName: string, private companyName: string) {
    super(name, lastName);
  }

  get getCompanyName(): string {
    return this.companyName;
  }
}
