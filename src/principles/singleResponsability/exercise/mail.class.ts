export class Mail {
  sendEmail(email: string, message: string): void {
    console.log(`Sending email to ${email}: ${message}`);
  }
}
