import { ITester } from "./tester.interface";

export class QualityAnssurance implements ITester {
  testCode(): void {
    console.log("Quality Anssurance is testing the code");
  }
}
