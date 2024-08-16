import { EmailExercise } from "./emailExercise.bad.class";

export class NotificationExercise {
  private emailService: EmailExercise;

  constructor() {
    this.emailService = new EmailExercise();
  }

  notify(message: string): void {
    this.emailService.sendEmail(message);
  }
}
