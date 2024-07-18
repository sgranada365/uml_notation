export class User {
  private name: string;
  private lastName: string;
  private age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  public updateProfile(name: string, lastName: string, age: number): void {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  public getProfile(): User {
    console.info(`${this.name} ${this.lastName} ${this.age}`);
    return this;
  }
}
