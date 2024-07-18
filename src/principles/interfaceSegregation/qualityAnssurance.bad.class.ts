import { IEmployee } from "./employee.interface";

export class BadQualityAnssurance implements IEmployee {
  writeCode(): void {
    console.error("Quality Anssurance can't write the code");
  }
  testCode(): void {
    console.log("Bad quality Anssurance is testing the code");
  }
  manageProject(): void {
    console.error("Quality Anssurance can't manage projects");
  }
}
