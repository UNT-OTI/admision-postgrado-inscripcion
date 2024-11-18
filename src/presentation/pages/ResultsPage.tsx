import { useContext } from "react";
import AdmissionContext from "../context/AdmissionProvider";
import { isMarkedQuestionWithItemValue } from "../../config/helpers";

export const ResultsPage = () => {
  const admissionContext = useContext(AdmissionContext);

  if (!admissionContext)
    throw new Error(
      "ResultsPage.tsx debe estar dentro del provider AdmissionProvider.tsx"
    );

  const { markedQuestions } = admissionContext;

  return (
    <>
      <h2 className="text-[#00439e] uppercase text-[30px] text-center font-normal">
        Resultados
      </h2>
      {markedQuestions.map((markedQuestion, index) =>
        isMarkedQuestionWithItemValue(markedQuestion) ? (
          <div className="first-of-type:mt-5 mt-3" key={index}>
            <p className="text-xl">{markedQuestion.questionLabel}</p>
            <div className="mt-1">
              <p className="ml-5 font-bold">Opción Seleccionada:</p>
              <p className="ml-5 text-lg">
                &#10003; {markedQuestion.itemLabel}{" "}
                <span className="text-green-500 font-bold">
                  ({markedQuestion.itemValue}{" "}
                  {(markedQuestion.itemValue ?? 0) > 1 ? "ptos." : "pto."})
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-3" key={index}>
            <p>Pregunta Compuesta</p>
            {<pre>{JSON.stringify(markedQuestion, null, 2)}</pre>}
          </div>
        )
      )}
    </>
  );
};
