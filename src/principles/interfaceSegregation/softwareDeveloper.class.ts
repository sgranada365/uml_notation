import { IDeveloper } from "./developer.interface";

export class SoftwareDeveloper implements IDeveloper {
  writeCode(): void {
    console.info("Bad developer is writing code");
  }
}
