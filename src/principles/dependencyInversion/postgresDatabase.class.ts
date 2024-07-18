import { IDatabase } from "./database.interface";

export class PostgresDatabase implements IDatabase {
  save(data: string): void {
    console.log(`Saving data in Postgres DB: ${data}`);
  }
}
