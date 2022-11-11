import { ICandidate } from "./candidate.interface";

export class FirstUser implements ICandidate {
  applyToVacant(vacantId: number): boolean {
    console.log("el primer usuario a aplicado a la vacante");
    return true;
  }
}
