import { Filters } from "./filters.class";
import { FiltersController } from "./filters.controller";

function main() {
  const controller: FiltersController = new FiltersController();
  controller.filters.selectFilter(5);
  controller.filters.setPage(7);
  printFilters("Filtros antes de restaurar: ", controller.filters);
  controller.restoreBackup();
  printFilters("Filtros restaurados: ", controller.filters);
}

function printFilters(text: string, filters: Filters) {
  console.log(text, JSON.stringify(filters.getFiltersSetting(), null, 2));
}
main();
