import { Questionnaire } from "./questionnaire.class";

/* La composicion define ciclos de vida dependientes para ambas partes de la relacion, 
    la parte total depende de las partes individuales y viceversa */
function main() {
  const firstQuestionnaire = new Questionnaire(1, "Questionnaire 1");
  const [firstQuestion] = firstQuestionnaire.questions;
  const secondQuestionnaire = new Questionnaire(2, "Questionnaire 2");
  const [secondQuestion] = secondQuestionnaire.questions;
  /* Si alguna cuestionario deja de existir entonces sus preguntas y posibles respuestas dejan de existir */
  console.log(
    "La pregunta 1 tiene el enunciado: " + firstQuestion.getStatement()
  );
  console.log(
    "La pregunta 2 tiene el enunciado: " + secondQuestion.getStatement()
  );
  console.log(
    "La pregunta 1 y 2 son iguales?: ",
    firstQuestion === secondQuestion
  );
}

main();
