import { useAdmission } from "../../hooks";

interface Props {
  itemLabel: string;
  itemValue: number;
  questionLabel: string;
}

export const SimpleOptions = ({
  itemLabel,
  itemValue,
  questionLabel,
}: Props) => {
  const admissionContext = useAdmission();

  const { addAnswerToQuestions } = admissionContext;

  const radioElementName = `Pregunta: ${questionLabel} - Item: ${itemLabel} - Valor: ${itemValue}`;

  return (
    <div className="flex gap-2">
      <input
        id={radioElementName}
        value={itemValue}
        onChange={() =>
          addAnswerToQuestions({ questionLabel, itemLabel, itemValue })
        }
        name={questionLabel}
        type="radio"
      />
      <label htmlFor={radioElementName} className="text-[18px]">
        {itemLabel}
      </label>
    </div>
  );
};
