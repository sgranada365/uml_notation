import { INotification, typesNotification } from "../interfaces";
import {
  SmsNotification,
  EmailNotification,
  WhastAppNotification,
} from "../notificationTypes";

export const strategies = new Map<typesNotification, INotification>([]);
strategies.set(typesNotification.sms, new SmsNotification());
strategies.set(typesNotification.email, new EmailNotification());
strategies.set(typesNotification.whatsApp, new WhastAppNotification());
