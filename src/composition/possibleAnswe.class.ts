export class PossibleAnswer {
  private id: number;
  private title: string;
  private discard: boolean;

  constructor(id: number, title: string, discard: boolean) {
    this.id = id;
    this.title = title;
    this.discard = discard;
  }

  public get isDisposable(): boolean {
    return this.discard;
  }

  public get statement(): string {
    return `${this.id}: ${this.title}`;
  }
}
