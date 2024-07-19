import { IDatabase } from "./database.interface";

export class MongoDatabase implements IDatabase {
  save(data: string): void {
    console.log(`Saving data in Mongo DB: ${data}`);
  }
}
