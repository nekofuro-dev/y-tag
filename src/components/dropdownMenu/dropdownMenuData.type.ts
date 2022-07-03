export interface DropdownMenuData {
  id?: number;
  dropDownData: DropDownData;
  subDropDownMenu: DropdownMenuData[];
}

export interface DropDownData {
  label: string;
  url?: string;
}
