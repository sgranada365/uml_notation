import { INotification } from "./notification.interface";

export class WhatsAppNotification implements INotification {
  public send(params: { message: string; media: number }): boolean {
    console.log(
      `Por whatsApp se envia el mensaje: ${params.message} enviado al teléfono: ${params.media}`
    );
    return true;
  }
}
