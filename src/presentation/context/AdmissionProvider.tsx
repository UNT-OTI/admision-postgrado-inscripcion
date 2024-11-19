import { createContext, useEffect, useState } from "react";
import { FormQuestions } from "../../infrastructure/interfaces/questions";
import { formQuestions } from "../data";

interface Props {
  children: React.ReactNode;
}

interface AdmissionContextType {
  isUploadConfirmed: boolean;
  markedQuestions: AnswersToQuestions[];
  questionnaire: FormQuestions;
  totalQualification: number;
  addAnswerToQuestions: (answersToQuestions: AnswersToQuestions) => void;
  setIsUploadConfirmed: (stateIsUploadConfirmed: boolean) => void;
  setTotalQualification: (stateTotalQualification: number) => void;
}

export interface AnswersToQuestions {
  questionLabel: string;
  itemLabel: string;
  itemValue?: number | undefined;
  subItemLabel?: string | number | undefined;
  subItemValue?: number | undefined;
}

const AdmissionContext = createContext<AdmissionContextType | undefined>(
  undefined
);

export const AdmissionProvider = ({ children }: Props) => {
  const questionnaire = formQuestions;
  const [isUploadConfirmed, setIsUploadConfirmed] = useState<boolean>(false);
  const [markedQuestions, setMarkedQuestions] = useState<AnswersToQuestions[]>(
    []
  );

  useEffect(() => {
    localStorage.setItem("marked-questions", JSON.stringify(markedQuestions));
  }, [markedQuestions]);

  const [totalQualification, setTotalQualification] = useState<number>(0);

  const addAnswerToQuestions = (answer: AnswersToQuestions) => {
    const { questionLabel, itemLabel, itemValue, subItemLabel, subItemValue } =
      answer;
    const tempMarkedQuestions = [...markedQuestions];
    let questionMarkedPosition: number;
    if (!subItemLabel && !subItemValue) {
      questionMarkedPosition = tempMarkedQuestions.findIndex(
        (markedQuestion) => markedQuestion.questionLabel === questionLabel
      );
    } else {
      questionMarkedPosition = tempMarkedQuestions.findIndex(
        (markedQuestion) =>
          markedQuestion.questionLabel === questionLabel &&
          markedQuestion.itemLabel === itemLabel
      );
    }

    if (questionMarkedPosition !== -1 && !subItemLabel && !subItemValue) {
      tempMarkedQuestions.splice(questionMarkedPosition, 1, {
        questionLabel,
        itemLabel,
        itemValue,
      });
      setMarkedQuestions(tempMarkedQuestions);
    } else if (!subItemLabel && !subItemValue) {
      setMarkedQuestions((prevState) => [
        ...prevState,
        { questionLabel, itemLabel, itemValue },
      ]);
    }

    if (questionMarkedPosition !== -1 && subItemLabel && subItemValue) {
      tempMarkedQuestions.splice(questionMarkedPosition, 1, {
        questionLabel,
        itemLabel,
        subItemLabel,
        subItemValue,
      });
      setMarkedQuestions(tempMarkedQuestions);
    } else if (subItemLabel && subItemValue) {
      setMarkedQuestions((prevState) => [
        ...prevState,
        { questionLabel, itemLabel, subItemLabel, subItemValue },
      ]);
    }
  };

  return (
    <AdmissionContext.Provider
      value={{
        isUploadConfirmed,
        markedQuestions,
        questionnaire,
        totalQualification,
        addAnswerToQuestions,
        setIsUploadConfirmed,
        setTotalQualification,
      }}
    >
      {children}
    </AdmissionContext.Provider>
  );
};

export default AdmissionContext;
