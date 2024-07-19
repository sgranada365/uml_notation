import { IDatabase } from "./database.interface";

export class Service {
  private dataBase: IDatabase;

  constructor(database: IDatabase) {
    this.dataBase = database;
  }

  saveData(data: string): void {
    this.dataBase.save(data);
  }
}
