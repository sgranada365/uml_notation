import { ProjectManager } from "./projectManager.class";
import { QualityAnssurance } from "./qualityAnssurance.class";
import { SoftwareDeveloper } from "./softwareDeveloper.class";

export const goodExample = () => {
  const softwareDeveloper = new SoftwareDeveloper();
  const qualityAnssurance = new QualityAnssurance();
  const projectManager = new ProjectManager();

  softwareDeveloper.writeCode();
  qualityAnssurance.testCode();
  projectManager.manageProject();
};
