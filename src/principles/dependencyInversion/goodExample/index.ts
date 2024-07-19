import { MongoDatabase } from "./mongoDatabase.class";
import { PostgresDatabase } from "./postgresDatabase.class";
import { Service } from "./service.class";

export const goodExample = () => {
  const mongoDB = new MongoDatabase();
  const postgresDB = new PostgresDatabase();

  let service = new Service(mongoDB);
  service.saveData("data to storage");

  service = new Service(postgresDB);
  service.saveData("data to storage");
};
