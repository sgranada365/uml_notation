import { FiltersBackup } from "./filters.backup";
import { Filters } from "./filters.class";

export class FiltersController {
  public filters: Filters;
  private filtersBackup: FiltersBackup;

  constructor() {
    this.filters = new Filters([1, 2], 2);
    this.filtersBackup = this.filters.makeBackup();
  }

  public saveFilters() {
    this.filtersBackup = this.filters.makeBackup();
  }

  public restoreBackup() {
    this.filters.restoreBackup(this.filtersBackup);
  }
}
