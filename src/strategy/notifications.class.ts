import { strategies } from "./constants";
import { INotification, typesNotification } from "./interfaces";

export class Notifications {
  private notification: INotification | undefined;

  public setNotificationMethod(method: typesNotification): void {
    const notification = strategies.get(method);
    if (!notification) {
      throw new Error("error no existe esa estrategia");
    }
    this.notification = notification;
  }

  public lauchNotification(params: any): boolean {
    if (this.notification) {
      const result = this.notification.send(params);
      this.notification = undefined;
      return result;
    }
    console.log("No hay notificaciones por enviar");
    return true;
  }
}
