import { MongoDatabase } from "./mongoDataBase.class";
import { PostgresDatabase } from "./postgresDataBase.class";
import { BadService } from "./service.bad.class";
import { Service } from "./service.class";

function main() {
  const badService = new BadService();
  badService.saveData("Bad data to storage");

  const mongoDB = new MongoDatabase();
  const postgresDB = new PostgresDatabase();

  let service = new Service(mongoDB);
  service.saveData("data to storage");

  service = new Service(postgresDB);
  service.saveData("data to storage");
}

main();
