import { INotification } from "./notification.interface";

export class EmailNotification implements INotification {
  public send(params: { message: string; media: string }): boolean {
    console.log(
      `Por email se envía el mensaje:${params.message} enviado al email: ${params.media}`
    );
    return true;
  }
}
