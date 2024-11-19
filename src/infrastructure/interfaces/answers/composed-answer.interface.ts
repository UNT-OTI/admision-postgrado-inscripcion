export interface SubAnswer {
  itemLabel: string;
  subItemLabel: string;
  subItemValue: number;
}

export interface NestedAnswer {
  questionLabel: string;
  items: SubAnswer[];
}
