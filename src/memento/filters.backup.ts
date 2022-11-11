export class FiltersBackup {
  constructor(
    private selectedFilters: number[],
    private paginatorPage: number
  ) {}

  public getSelectedFilters(): number[] {
    return this.selectedFilters;
  }
  public getPaginatorPage(): number {
    return this.paginatorPage;
  }
}
