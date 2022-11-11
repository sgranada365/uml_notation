import {Notification} from "./notification.class";

function main(){
  const notificator = new Notification();
  console.log("================SMS================")
  notificator.setNotificationMethod("sms");
  notificator.launchNotification({text:"Hello world!"});
  console.log("\n")

  console.log("================WhatsApp================")
  notificator.setNotificationMethod("whatsapp");
  notificator.launchNotification({text:"Hello world!"});
  console.log("\n")

  console.log("================WhatsApp================")
  notificator.setNotificationMethod("email");
  notificator.launchNotification({text:"Hello world!"});
  console.log("\n")

}

main()