export class BadUser {
  private userName: string;
  private password: string;
  private hasLogged: boolean;
  private name: string;
  private lastName: string;
  private age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
    this.userName = `${name}:${lastName}:${age}`;
    this.password = `${age}:${age}`;
    this.hasLogged = false;
  }

  public login(userName: string, password: string): void {
    const validation: boolean =
      userName == this.userName && password == this.password;

    if (validation) {
      console.info(`Success login: ${userName} - ${password}`);
    } else {
      console.error(`Error login: ${userName} - ${password}`);
    }

    this.hasLogged = validation;
  }

  public logout(username: string): void {
    console.info(`User logout: ${username} `);
    this.hasLogged = false;
  }

  public isLoggedUser(): boolean {
    return this.hasLogged;
  }

  public getUserCredentials(): string {
    return `${this.userName} - ${this.password}`;
  }

  public updateProfile(name: string, lastName: string, age: number): void {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  public getProfile(): BadUser {
    console.info(`${this.name} ${this.lastName} ${this.age}`);
    return this;
  }
}
