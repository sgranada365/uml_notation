import { BadDeveloper } from "./developer.bad.class";
import { BadProjectManager } from "./projectManager.bad.class";
import { ProjectManager } from "./projectManager.class";
import { BadQualityAnssurance } from "./qualityAnssurance.bad.class";
import { QualityAnssurance } from "./qualityAnssurance.class";
import { SoftwareDeveloper } from "./softwareDeveloper.class";

function main() {
  const badDeveloper = new BadDeveloper();
  const badQualityAnssurance = new BadQualityAnssurance();
  const badProjectManager = new BadProjectManager();

  badDeveloper.writeCode();
  badDeveloper.testCode();
  badDeveloper.manageProject();

  badQualityAnssurance.writeCode();
  badQualityAnssurance.testCode();
  badQualityAnssurance.manageProject();

  badProjectManager.writeCode();
  badProjectManager.testCode();
  badProjectManager.manageProject();

  console.log();

  const softwareDeveloper = new SoftwareDeveloper();
  const qualityAnssurance = new QualityAnssurance();
  const projectManager = new ProjectManager();

  softwareDeveloper.writeCode();
  qualityAnssurance.testCode();
  projectManager.manageProject();
}

main();
