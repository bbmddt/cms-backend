export interface SwitchProps {
  circle?: boolean;
  label: LanguageList;
  grid?: number;
  translateKey?: string;
}

export interface IPBlockProps {
  trash?: boolean;
  grid?: number;
}

export interface CustomSearchProps {
  grid?: number;
  label: LanguageList;
  translateKey?: string;
  // onchange?: React.ChangeEventHandler<HTMLInputElement>;
  // value?: string;
}

export interface MobileProps {
  label: LanguageList;
  translateKey?: string;
}

interface styleType {
  backgroundColor?: string;
  color?: string;
  padding?: number;
  margin?: number;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: number;
  borderRadius?: number;
  border?: string;
  boxShadow?: string;
  textAlign?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
}

export interface SidebarSingleProps {
  btnText: LanguageList;
  Icon: DynamicIconProps;
  path: string;
  textColor: string;
  lang?: string;
}
export interface TableProps {
  tr1: LanguageList;
  tr2: LanguageList;
  tr3?: LanguageList;
  tr4?: LanguageList;
  tr5?: LanguageList;
  tr6?: LanguageList;
  tr7?: LanguageList;
  tr8?: LanguageList;
  path?: string;
  editable?: boolean;
  deletable?: boolean;
  creatable?: boolean;
  sortable?: boolean;
  grid?: number;
  data?: [string[] | number[] | boolean[]];
  operation?: string[];
}

export interface DatePickerProps {
  grid?: number;
  label: LanguageList;
  translateKey?: string;
}

export interface Button {
  key: string;
  buttonType: 'button' | 'submit' | 'reset' | 'edit' | 'add' | undefined;
  label: LanguageList;
}

export interface Element {
  modal: 'SearchModal' | 'EditModal' | 'TableModal' | undefined;
  components: (DynamicComponentProps | DynamicTableProps)[] | undefined;
  translateKey: string | undefined;
  buttons: Button[];
}

interface editProps {
  title: string;
  elements: Element[];
}

export interface LanguageList {
  en: string;
  zh: string;
}

export interface DynamicComponentProps {
  key: string;
  type: string;
  label: LanguageList;
  grid?: number;
  translateKey?: string;
}

export interface ContextProps {
  label: LanguageList;
}
export interface DynamicTableProps {
  key: string;
  type: string;
  tr1: LanguageList;
  tr2: LanguageList;
  tr3?: LanguageList;
  tr4?: LanguageList;
  tr5?: LanguageList;
  tr6?: LanguageList;
  tr7?: LanguageList;
  tr8?: LanguageList;
  grid?: number;
  translateKey?: string;
  editables?: boolean;
  addables?: boolean;
  deletables?: boolean;
  sortables?: boolean;
  operation: OperationProps[];
  editPath: string;
}

export interface OperationProps {
  add?: LanguageList;
  sort?: LanguageList;
  delete?: LanguageList;
  upload?: LanguageList;
  export?: LanguageList;
  download?: LanguageList;
}

export interface DynamicIconProps {
  title: string;
  sx?: string;
}

export interface editSkeletonProps {
  edit: editProps[];
}
export interface Section {
  title: LanguageList;
  path: string;
  icon: DynamicIconProps;
  elements: Element[];
}

interface SkeletonStyle {
  logo: string;
  brandName: string;
  primaryColor: string;
  secondaryColor: string;
  warningColor: string;
  alertColor: string;
  buttonConfirm: string;
  buttonReset: string;
  selectorConfirm: string;
  sideBarTitle: string;
  sideBarText: string;
  textTitle: string;
  breadCrumbsText: string;
  theme: styleType;
}

export interface StyleSkeletonProps {
  style: SkeletonStyle[];
}

export interface MenuProps {
  title: string;
  sections: Section[];
}

export interface SkeletonProps {
  menu: MenuProps;
}

export interface BrandFakeData {
  id: number;
  brandCode: number;
  brandName: string;
  brandStatus: boolean;
  modifiedDate: string;
}

export interface BranchFakeData {
  id: number;
  branchName: string;
  branchCode: number;
  branchBrand: string;
  branchStatus: boolean;
}
export interface CategoryFakeData {
  id: number;
  categoryName: string;
  categoryStatus: boolean;
}
export interface AreaFakeData {
  id: number;
  areaId: number;
  areaName: string;
  areaCode: string;
  areaCentering: string;
}

export interface getDataKeyProps {
  item: string;
}
