import { ItemWithSubItems } from "../../../infrastructure/interfaces/questions";
import { useAdmission } from "../../hooks";

interface Props {
  item: ItemWithSubItems;
  questionLabel: string;
}

export const ComposedOptions = ({ item, questionLabel }: Props) => {
  const admissionContext = useAdmission();

  const { addAnswerToQuestions } = admissionContext;

  const radioElementName = `Pregunta: ${questionLabel} - Item: ${item.itemLabel}`;

  return (
    <div className="flex flex-col mb-3">
      <label className="text-[18px]">{item.itemLabel}</label>
      <ul className="ml-3">
        {item.subItems.map((subItem, indexSubItem) => (
          <div
            key={`${radioElementName} - Index: ${indexSubItem}`}
            className="flex items-center gap-2"
          >
            <li className="text-[18px] flex items-center gap-2">
              <input
                id={`${item.itemLabel} - ${subItem.subItemValue}`}
                name={radioElementName}
                value={subItem.subItemValue}
                onChange={() =>
                  addAnswerToQuestions({
                    questionLabel,
                    itemLabel: item.itemLabel,
                    subItemLabel: subItem.subItemLabel,
                    subItemValue: subItem.subItemValue,
                  })
                }
                type="radio"
              />
              <label htmlFor={`${item.itemLabel} - ${subItem.subItemValue}`}>
                {subItem.subItemLabel}
              </label>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
