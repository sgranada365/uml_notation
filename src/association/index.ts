import { Candidate } from "./candidate.class";

/* La asociacion define una relacion entre dos clases */
function main() {
  const candidate = new Candidate(1, "Pepito", "Perez");
  console.log(JSON.stringify(candidate.getCandidateData(), null, 2));
}

main();
