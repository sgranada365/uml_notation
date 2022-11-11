import { INotification } from "../interfaces";

export class SmsNotification implements INotification {
  public send(object: any) {
		console.log('se envio un sms')
    return true;
  }
}
