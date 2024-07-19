import { BadDeveloper } from "./developer.bad.class";
import { BadProjectManager } from "./projectManager.bad.class";
import { BadQualityAnssurance } from "./qualityAnssurance.bad.class";

export const badExample = () => {
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
};
