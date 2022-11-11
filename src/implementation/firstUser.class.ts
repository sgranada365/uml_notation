import { ICandidate } from "./candidate.interface";

export class FirstUser implements ICandidate {
  applyToVacant(vacantId: number): boolean {
    console.log("El primer usuario ha aplicado a la vacante");
    return true;
  }
}
