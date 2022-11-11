import { User } from "./user.abstract";

export class Candidate extends User {
  constructor( name: string, lastName: string, private pageId: number,) {
    super(name, lastName);
  }

  getPageId(): number {
    return this.pageId;
  }
}
