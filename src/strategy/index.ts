import { typesNotification } from "./interfaces";
import { Notifications } from "./notifications.class";

const main = () => {
  const notifications = new Notifications();
  notifications.setNotificationMethod(typesNotification.email);
  notifications.lauchNotification({
		subject: "Esto es un asunto de prueba",
		title: "Esto es un titulo de prueba",
		body: "También es un cuerpo de prueba",
		address: "correo-de-prueba@gmail.com"
	});
  notifications.setNotificationMethod(typesNotification.sms);
  notifications.lauchNotification({
		phone: 911,
		message: "Este es un mensaje de prueba"
	});
  notifications.setNotificationMethod(typesNotification.whatsApp);
  notifications.lauchNotification({
		phone: 911,
		message: "Este es un mensaje de prueba por WhastApp"
	});
};

main();
