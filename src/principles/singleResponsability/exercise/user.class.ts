export class User {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  save(): void {
    console.log(`Saving user ${this.name} to the database.`);
  }

  delete(): void {
    console.log(`Deleting user ${this.name} from the database.`);
  }

  getEmail(): string {
    return this.email;
  }
}
