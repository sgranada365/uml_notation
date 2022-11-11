import {INotification} from "../notification.interface";

export class WhatsApp implements INotification {
  send(params: Record<string, unknown>): boolean {
    console.info("SEND NOTIFICATION VIA WHATSAPP", params);
    return true;
  }
}