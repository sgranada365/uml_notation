import { INotification } from "../interfaces";

export class EmailNotification implements INotification {
  public send(object: any) {
		console.log("se envio un email")
    return true;
  }
}
