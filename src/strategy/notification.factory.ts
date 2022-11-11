import {Sms} from "./strategies/sms.class";
import {Email} from "./strategies/email.class";
import {WhatsApp} from "./strategies/whatsapp.class";
import {INotification} from "./notification.interface";

const RegisteredFactories = {
  sms: Sms,
  email: Email,
  whatsapp: WhatsApp
}
export type SupportedProviders = keyof typeof RegisteredFactories

export class NotificationFactory implements INotification{
  constructor(providerType: keyof typeof RegisteredFactories) {
    if (!(providerType in RegisteredFactories)) throw new Error("Strategy provider not found");
    const strategy = RegisteredFactories[providerType]
    return <INotification> new strategy();
  }

  send(params: Record<string, unknown>): boolean {
    throw new Error("Unimplemented method");
  }
}