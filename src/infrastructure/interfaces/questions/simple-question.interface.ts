export interface Item {
  itemLabel: string;
  itemValue: number;
}

export interface SimpleQuestion {
  questionLabel: string;
  items: Item[];
}
