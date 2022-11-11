import { INotification } from "./notification.interface";

export class SMSNotification implements INotification {
  public send(params: { message: string; media: number }): boolean {
    console.log(
      `Por mensaje de texto se envía el mensaje: ${params.message} enviado al telefono: ${params.media}`
    );
    return true;
  }
}
