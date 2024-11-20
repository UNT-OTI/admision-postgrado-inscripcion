import { AnswersToQuestions } from "../../infrastructure/interfaces/answers";

export const isMarkedQuestionWithItemValue = (
  answerToQuestions: AnswersToQuestions
): boolean => {
  return "itemValue" in answerToQuestions;
};
