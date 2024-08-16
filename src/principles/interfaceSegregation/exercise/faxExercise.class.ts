import { IMachineExercise } from "./machineExercise.bad.interface";

export class FaxExercise implements IMachineExercise {
  print(): void {
    console.error("A Fax machine cant print documents");
  }
  scan(): void {
    console.error("A Fax machine cant scan documents");
  }
  fax(): void {
    console.log("Sending documents");
  }
}
