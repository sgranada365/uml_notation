import { IEmployee } from "./employee.interface";

export class BadDeveloper implements IEmployee {
  writeCode(): void {
    console.info("Bad developer is writing code");
  }
  testCode(): void {
    console.error("Developer can't test the code");
  }
  manageProject(): void {
    console.error("Developer can't manage projects");
  }
}
