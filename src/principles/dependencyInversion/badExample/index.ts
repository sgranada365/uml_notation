import { BadService } from "./service.bad.class";

export const badExample = () => {
  const badService = new BadService();
  badService.saveData("Bad data to storage");
};
