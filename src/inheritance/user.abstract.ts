export abstract class User {
  public id: number;
  public name: string;
  public lastName: string;

  constructor(name: string, lastName: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.lastName = lastName;
  }
  generateUserName(): string {
    return `${this.id}_${this.name}_${this.lastName}`;
  }
}
