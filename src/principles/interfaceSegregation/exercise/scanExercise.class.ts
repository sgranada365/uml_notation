import { IMachineExercise } from "./machineExercise.bad.interface";

export class ScanExercise implements IMachineExercise {
  print(): void {
    console.error("An scan machine cant print documents");
  }
  scan(): void {
    console.log("Scanning documents");
  }
  fax(): void {
    console.error("An scan machine cant send fax");
  }
}
