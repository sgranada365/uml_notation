import { INotification } from "../interfaces";

export class WhastAppNotification implements INotification {
  public send(object: any) {
    console.log("se envió un mensaje por whastapp");
    console.log("Estos son los parametros:", object);
    console.log("******************");
    console.log("");
    return true;
  }
}
