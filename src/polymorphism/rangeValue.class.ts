import { Value } from "./value.abstract";

export class RangeValue extends Value {
  constructor(id: string, label: string, private from: number, private to: number) {
    super(id, label);
  }
  public getValue() {
    return `${this.id}_${this.from}_${this.to}`;
  }
}
