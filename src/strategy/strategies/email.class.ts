import {INotification} from "../notification.interface";

export class Email implements INotification {
  private connect(){
    console.info("CREATING CONNECTION WITH SMTP SERVER");
  }
  private closeConnection(){
    console.info("DELETING CONNECTION");
  }
  private dispatch(params: Record<string, unknown>){
    console.info("SEND NOTIFICATION VIA SMS", params);
  }
  send(params: Record<string, unknown>): boolean {
    this.connect();
    this.dispatch(params);
    this.closeConnection();
    return false;
  }
}