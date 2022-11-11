export interface INotification {
  send(params:Record<string, unknown>):boolean
}