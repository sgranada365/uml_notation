import { INotification } from "../interfaces";

export class WhastAppNotification implements INotification {
  public send(object: any) {
		console.log("se envio un whastapp")
    return true;
  }
}
