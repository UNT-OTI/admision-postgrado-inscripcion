export interface SubItem {
  subItemLabel: string | number;
  subItemValue: number;
}

export interface ItemWithSubItems {
  itemLabel: string;
  subItems: SubItem[];
}

export interface QuestionWithChilds {
  questionLabel: string;
  items: ItemWithSubItems[];
}
