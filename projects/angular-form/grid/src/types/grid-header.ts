import {ComponentInstance} from '@form/angular';

export interface GridHeader {
  component?: ComponentInstance;
  key: string;
  sort?: SortType;
  label: string;
  renderCell?(cellValue: any, component?: ComponentInstance): string;
}

export enum SortType {
  ASC = 'asc',
  DESC = 'desc'
}
