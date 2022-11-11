import { EmailNotification } from "./emailNotification.class";
import { INotification } from "./notification.interface";
import { SMSNotification } from "./smsNotification.class";
import { WhatsAppNotification } from "./whatsAppNotification.class";

export type TMethods = "sms" | "email" | "whatsApp";

export class Notifications implements INotification {
  private notification: INotification;

  public setNotificationMethod(method: TMethods) {
    switch (method) {
      case "sms":
        this.notification = new SMSNotification();
        break;
      case "whatsApp":
        this.notification = new WhatsAppNotification();
        break;
      case "email":
        this.notification = new EmailNotification();
        break;
      default:
        this.notification = new EmailNotification();
        break;
    }
  }
  public launchNotification(params: {
    message: string;
    media: string | number;
  }) {
    this.send(params);
  }
  public send(params: { message: string; media: string | number }): boolean {
    if (!this.notification) {
      console.log("No has elegido un método de notificación");
      return false;
    }
    return this.notification.send(params);
  }
}
