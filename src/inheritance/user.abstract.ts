export abstract class User {
  protected id: number;
  protected name: string;
  protected lastName: string;

  constructor(name: string, lastName: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.lastName = lastName;
  }
  generateUserName(): string {
    return `${this.id}_${this.name}_${this.lastName}`;
  }
}
