import { AnswersToQuestions } from "../../presentation/context/AdmissionProvider";

export const isMarkedQuestionWithItemValue = (
  answerToQuestions: AnswersToQuestions
): boolean => {
  return "itemValue" in answerToQuestions;
};
