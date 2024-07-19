import { BadMongoDatabase } from "./mongoDatabase.bad.class";

export class BadService {
  private badMongoDatabase: BadMongoDatabase;

  constructor() {
    this.badMongoDatabase = new BadMongoDatabase();
  }

  saveData(data: string): void {
    this.badMongoDatabase.save(data);
  }
}
