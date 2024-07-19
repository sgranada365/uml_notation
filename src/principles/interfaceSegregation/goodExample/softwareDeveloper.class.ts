import { IDeveloper } from "./developer.interface";

export class SoftwareDeveloper implements IDeveloper {
  writeCode(): void {
    console.info("Developer is writing code");
  }
}
