export abstract class Value {
  constructor(protected id: string, protected label: string) {}
  public getValue() {
    return `${this.id}_${this.label}`;
  }
}
