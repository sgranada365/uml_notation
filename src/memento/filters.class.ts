import { FiltersBackup } from "./filters.backup";

export class Filters {
  constructor(
    private selectedFilters: number[],
    private paginatorPage: number
  ) {}

  public makeBackup(): FiltersBackup {
    return new FiltersBackup([...this.selectedFilters], this.paginatorPage);
  }

  public restoreBackup(backup: FiltersBackup) {
    this.selectedFilters = backup.getSelectedFilters();
    this.paginatorPage = backup.getPaginatorPage();
  }

  public selectFilter(filterId: number) {
    this.selectedFilters.push(filterId);
  }

  public deselectFilter(filterId: number) {
    this.selectedFilters = this.selectedFilters.filter(
      (filter: number) => filter !== filterId
    );
  }

  public setPage(page: number) {
    this.paginatorPage = page;
  }

  public getFiltersSetting(): {
    selected: number[];
    page: number;
  } {
    return {
      selected: this.selectedFilters,
      page: this.paginatorPage,
    };
  }
}
