import { IAnalist } from "./anlist.interface";
import { ICandidate } from "./candidate.interface";

export class SecondUser implements ICandidate, IAnalist {
  publishVacant(vacantId: number): boolean {
    console.log("Vacante publicada por el analista ");
    return true;
  }
  applyToVacant(vacantId: number): boolean {
    console.log("El usuario 2 ha aplicado a la vacante");
    return true;
  }
}
