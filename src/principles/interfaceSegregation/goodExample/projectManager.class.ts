import { IManager } from "./manager.interface";

export class ProjectManager implements IManager {
  manageProject(): void {
    console.log("Project manager is managing the projects");
  }
}
