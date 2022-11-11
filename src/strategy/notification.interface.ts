export interface INotification {
  send(params: { message: string; media: string | number }): boolean;
}
