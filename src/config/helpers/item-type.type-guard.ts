import {
  Item,
  ItemWithSubItems,
} from "../../infrastructure/interfaces/questions";

export const isItemWithSubItems = (
  item: Item | ItemWithSubItems
): item is ItemWithSubItems => {
  return "subItems" in item;
};
