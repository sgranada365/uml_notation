export class Skill {
  private id: number;
  private description: string;
  private level: number;

  constructor(id: number, description: string, level: number) {
    this.id = id;
    this.description = description;
    this.level = level;
  }

  public getFullDescription(): string {
    return `${this.id}: ${this.description} en el nivel: ${this.level}`;
  }
}
