export class Auth {
  private userName: string;
  private password: string;
  private hasLogged: boolean;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
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
}
