export interface Filters {
  startDate?: number;
  endDate?: number;
  accounts?: string[];
  industries?: string[];
  states?: string[];
}

export interface IUseFilters {
  filters: Filters;
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  clearFilters: () => void;
}