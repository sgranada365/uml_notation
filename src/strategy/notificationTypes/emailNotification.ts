import { INotification } from "../interfaces";

export class EmailNotification implements INotification {
  public send(object: any) {
    console.log("se envió un email");
    console.log("Estos son los parametros:", object);
    console.log("******************");
    console.log("");
    return true;
  }
}
