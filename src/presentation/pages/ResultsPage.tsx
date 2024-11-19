import { groupAnswersToQuestions } from "../../config/helpers";

export const ResultsPage = () => {
  const markedQuestions = JSON.parse(
    localStorage.getItem("marked-questions") ?? "[]"
  );
  const groupedAnswers = groupAnswersToQuestions(markedQuestions);

  return (
    <>
      <h2 className="text-[#00439e] uppercase text-[30px] text-center font-normal">
        Resultados
      </h2>
      {groupedAnswers.map((markedQuestion, markedQuestionIndex) =>
        !("items" in markedQuestion) ? (
          <div className="first-of-type:mt-8 mt-3" key={markedQuestionIndex}>
            <p className="text-xl">{markedQuestion.questionLabel}</p>
            <div className="mt-1">
              <p className="ml-5 font-bold">Opción Seleccionada:</p>
              <p className="ml-5 text-lg">
                &#10003; {markedQuestion.itemLabel}{" "}
                <span className="text-green-500 font-bold">
                  ({markedQuestion.itemValue}{" "}
                  {(markedQuestion.itemValue ?? 0) > 1 ||
                  (markedQuestion.itemValue ?? 0) < 1
                    ? "ptos."
                    : "pto."}
                  )
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-5" key={markedQuestionIndex}>
            <p className="text-xl">{markedQuestion.questionLabel}</p>
            {markedQuestion.items.map((item, itemIndex) => (
              <div
                className="mt-3"
                key={`${markedQuestionIndex} - ${itemIndex}`}
              >
                <p className="ml-5 text-lg">{item.itemLabel}</p>
                <p className="ml-5 font-bold">Opción Seleccionada:</p>
                <p className="ml-5 text-lg">
                  &#10003; {item.subItemLabel}{" "}
                  <span className="text-green-500 font-bold">
                    ({item.subItemValue})
                    {(item.subItemValue ?? 0) > 1 ||
                    (item.subItemValue ?? 0) < 1
                      ? "ptos."
                      : "pto."}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
};
