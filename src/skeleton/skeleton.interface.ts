/// **************************Skeleton All Types *************************************:
export interface SkeletonProps {
  menu: MenuProps;
}

export interface MenuProps {
  title: string;
  sections: Section[];
}

export interface Section {
  title: LanguageList;
  path: string;
  icon?: DynamicIconProps;
  elements: Element[];
}
export interface LanguageList {
  en: string;
  zh: string;
}

export interface DynamicIconProps {
  title?: string;
  sx?: string;
}

export interface Element {
  modal: 'SearchModal' | 'EditModal' | 'TableModal' | undefined;
  components: (DynamicComponentProps | DynamicTableProps)[] | undefined;
  translateKey?: string | undefined;
  buttons: Button[];
}

export interface DynamicComponentProps {
  key: string;
  type: string;
  label: LanguageList;
  grid?: number;
  translateKey?: string;
}

export interface DynamicTableProps {
  key: string;
  type: string;
  tableList: TableListSkeletonProps;
  grid?: number;
  translateKey?: string;
  editables?: boolean;
  addables?: boolean;
  deletables?: boolean;
  sortables?: boolean;
  operation: OperationProps[];
  editPath: string;
  // data?: Array<TableDataProps>;
  path?: string;
}

export interface TableListSkeletonProps {
  tr1: tableTitleProps;
  tr2: tableTitleProps;
  tr3?: tableTitleProps;
  tr4?: tableTitleProps;
  tr5?: tableTitleProps;
  tr6?: tableTitleProps;
  tr7?: tableTitleProps;
  tr8?: tableTitleProps;
}

interface tableTitleProps {
  key: string;
  label: LanguageList;
}

// interface TableDataProps {
//   data: BrandFakeData | BranchFakeData | CategoryFakeData | AreaFakeData;
// }

export interface Button {
  key: string;
  buttonType: 'button' | 'submit' | 'reset' | 'edit' | 'add' | undefined;
  label: LanguageList;
}

export interface OperationProps {
  add?: LanguageList;
  sort?: LanguageList;
  delete?: LanguageList;
  upload?: LanguageList;
  export?: LanguageList;
  download?: LanguageList;
}
