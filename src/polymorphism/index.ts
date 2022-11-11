import { LevelValue } from "./levelValue.class";
import { RangeValue } from "./rangeValue.class";
import { Value } from "./value.abstract";

function main() {
  const values: Value[] = [
    new RangeValue("rango", "Menos de un año", 0, 12),
    new LevelValue("nivel", "sql", 3),
    new LevelValue("nivel", "javascript", 2)
  ];

  values.forEach((value: Value) => {
    console.log(value.getValue());
  });
}

main();
