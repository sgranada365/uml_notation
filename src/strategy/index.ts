import { typesNotification } from "./interfaces";
import { Notifications } from "./notifications.class";

const main = () => {
  const notifications = new Notifications();
  notifications.setNotificationMethod(typesNotification.email);
  notifications.lauchNotification({});
  notifications.setNotificationMethod(typesNotification.sms);
  notifications.lauchNotification({});
  notifications.setNotificationMethod(typesNotification.whatsApp);
  notifications.lauchNotification({});
};

main();
