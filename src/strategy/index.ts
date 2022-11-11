import { Notifications } from "./notifications.class";

function main() {
  const notification = new Notifications();
  notification.send({
    message: "Este mensaje no debe salir",
    media: 55555555,
  });
  notification.setNotificationMethod("sms");
  notification.send({
    message: "Excelente clase muchas gracias ",
    media: 55555555,
  });
  notification.setNotificationMethod("whatsApp");
  notification.send({
    message: "Che perris.... ",
    media: 999999999,
  });
  notification.setNotificationMethod("email");
  notification.send({
    message: "Me disculpan lo mal hecho, pero es con amor... jajjajja",
    media: "will@dev.co",
  });
}
main();
