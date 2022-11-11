import { Candidate } from "./candidate.class";
import { Skill } from "./skill.class";

/* La agregacion define ciclos de vida independientes para ambas partes de la relacion */
function main() {
  const skills = [new Skill(1, "SQL", 3), new Skill(2, "NODE", 2)];
  const candidate = new Candidate(1, "Pepito", "Perez", skills); // El candidato tiene habilidades
  /* Si el candidato no existe, las habilidades aun siguen existiendo, lo mismo en el caso contrario  */
  console.log(JSON.stringify(candidate.getCandidateData(), null, 2));
}

main();
