import { INotification } from "../interfaces";

export class SmsNotification implements INotification {
  public send(object: any) {
    console.log("se envió un sms");
    console.log("Estos son los parametros:", object);
    console.log("******************");
    console.log("");
    return true;
  }
}
