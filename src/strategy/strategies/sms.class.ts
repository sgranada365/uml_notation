import {INotification} from "../notification.interface";

export class Sms implements INotification{
  send(params: Record<string, unknown>): boolean {
    console.info("SEND NOTIFICATION VIA SMS", params);
    return true;
  }
}