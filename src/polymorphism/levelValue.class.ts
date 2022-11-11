import { Value } from "./value.abstract";

export class LevelValue extends Value {
  constructor(id: string, label: string, private level: number) {
    super(id, label);
  }
  public getValue() {
    return `${this.id}_${this.level}`;
  }
}
