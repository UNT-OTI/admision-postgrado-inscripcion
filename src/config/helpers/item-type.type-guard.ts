import {
  Item,
  ItemWithSubItems,
} from "../../infrastructure/interfaces/questions";

export const isItemWithSubItems = (item: Item | ItemWithSubItems): boolean => {
  return "subItems" in item;
};
