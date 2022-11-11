import { INotification, typesNotification } from "../interfaces";
import {
  SmsNotification,
  EmailNotification,
  WhastAppNotification,
} from "../notificationTypes";

export const strategies = new Map<typesNotification, INotification>([
  [typesNotification.sms, new SmsNotification()],
  [typesNotification.email, new EmailNotification()],
  [typesNotification.whatsApp, new WhastAppNotification()],
]);
