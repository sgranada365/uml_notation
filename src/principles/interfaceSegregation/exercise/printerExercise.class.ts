import { IMachineExercise } from "./machineExercise.bad.interface";

export class PrinterExercise implements IMachineExercise {
  print(): void {
    console.log("Printing some documents");
  }
  scan(): void {
    console.error("A printer machine cant scan documents");
  }
  fax(): void {
    console.error("A printer machine cant send fax");
  }
}
