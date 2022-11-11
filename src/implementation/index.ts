import { ICandidate } from "./candidate.interface";
import { FirstUser } from "./firstUser.class";
import { SecondUser } from "./secondUser.class";

function main() {
  const firstUser: FirstUser = new FirstUser();
  const secondUser: SecondUser = new SecondUser();
  const candidates: ICandidate[] = [firstUser, secondUser];
  secondUser.publishVacant(1);
  candidates.forEach((candidate: ICandidate) => {
    candidate.applyToVacant(1);
  });
}

main();
