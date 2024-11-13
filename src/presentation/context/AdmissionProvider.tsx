import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { FormQuestions } from "../../infrastructure/interfaces/questions";
import { formQuestions } from "../data";

interface Props {
  children: React.ReactNode;
}

interface AdmissionContextType {
  questionnaire: FormQuestions;
  addAnswerToQuestions: (answersToQuestions: AnswersToSimpleQuestions) => void;
  submitCVDataForm: () => void;
}

interface AnswersToSimpleQuestions {
  questionLabel: string;
  itemLabel: string;
  itemValue: number;
}

const AdmissionContext = createContext<AdmissionContextType | undefined>(
  undefined
);

export const AdmissionProvider = ({ children }: Props) => {
  const questionnaire = formQuestions;
  const [markedQuestions, setMarkedQuestions] = useState<
    AnswersToSimpleQuestions[]
  >([]);

  const addAnswerToQuestions = ({
    questionLabel,
    itemLabel,
    itemValue,
  }: AnswersToSimpleQuestions) => {
    const tempMarkedQuestions = [...markedQuestions];
    const questionMarkedPosition = tempMarkedQuestions.findIndex(
      (markedQuestion) => markedQuestion.questionLabel === questionLabel
    );
    if (questionMarkedPosition !== -1) {
      tempMarkedQuestions.splice(questionMarkedPosition, 1, {
        questionLabel,
        itemLabel,
        itemValue,
      });
      setMarkedQuestions(tempMarkedQuestions);
    } else {
      setMarkedQuestions((prevState) => [
        ...prevState,
        { questionLabel, itemLabel, itemValue },
      ]);
    }
  };

  const submitCVDataForm = () => {
    Swal.fire({
      title: "¿Está seguro?",
      html: `
      <p>Las respuestas no podrán ser modificadas.</p>
      `,
      showCancelButton: true,
      confirmButtonText: "Ok",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Datos Grabados Correctamente!", "", "success");
      }
    });
  };

  return (
    <AdmissionContext.Provider
      value={{
        questionnaire,
        addAnswerToQuestions,
        submitCVDataForm,
      }}
    >
      {children}
    </AdmissionContext.Provider>
  );
};

export default AdmissionContext;
