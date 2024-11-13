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
  const radioElementName = `Pregunta: ${questionLabel} - Item: ${itemLabel} - Valor: ${itemValue}`;

  return (
    <div className="flex gap-2">
      <input id={radioElementName} name={questionLabel} type="radio" />
      <label htmlFor={radioElementName} className="text-[18px]">
        {itemLabel}
      </label>
    </div>
  );
};
