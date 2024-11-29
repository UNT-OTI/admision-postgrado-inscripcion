import {
  QuestionWithChilds,
  SimpleQuestion,
} from "../../../infrastructure/interfaces/questions";
import { isItemWithSubItems } from "../../../config/helpers";
import { SimpleOptions } from "./SimpleOptions";
import { ComposedOptions } from "./ComposedOptions";

interface Props {
  question: SimpleQuestion | QuestionWithChilds;
}

export const RadioButtonsGroupByQuestion = ({ question }: Props) => {
  const { questionLabel, items } = question;

  return (
    <div>
      <hr className="h-5 bg-[#00439e] mb-3" />
      <p className="mt-1 text-xl leading-5">{questionLabel}</p>
      <ul className="flex flex-col  ml-5 mt-3">
        {items.map((item, itemIndex) =>
          isItemWithSubItems(item) ? (
            <ComposedOptions
              key={`${questionLabel} - ${item.itemLabel}`}
              item={item}
              questionLabel={questionLabel}
            />
          ) : (
            <SimpleOptions
              key={itemIndex}
              itemLabel={item.itemLabel}
              itemValue={item.itemValue}
              questionLabel={questionLabel}
            />
          )
        )}
      </ul>
    </div>
  );
};
