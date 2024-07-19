import { IEmployee } from "./employee.interface";

export class BadProjectManager implements IEmployee {
  writeCode(): void {
    console.error("Project manager can't write the code");
  }
  testCode(): void {
    console.error("Project manager can't test the code");
  }
  manageProject(): void {
    console.log("Bad project manager is managing the projects");
  }
}
