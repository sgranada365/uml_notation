import { Analist } from "./analist.class";
import { Candidate } from "./candidate.class";
import { User } from "./user.abstract";

function main() {
  const candidateUser = new Candidate("Pepito", "Perez", 134);
  const analistUser = new Analist("Natalia", "Rodriguez", "Magneto");
  console.log("El candidato es un usuario? " + (candidateUser instanceof User));
  console.log("El analista es un usuario? " + (analistUser instanceof User));
  console.log(
    `El userName del candidato es: ${candidateUser.generateUserName()}`
  );
  console.log(`El userName del analista es: ${analistUser.generateUserName()}`);
}

main();
