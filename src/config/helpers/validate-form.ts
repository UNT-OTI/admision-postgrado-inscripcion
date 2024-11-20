import { AnswersToQuestions } from "../../infrastructure/interfaces/answers";
import { FormQuestions } from "../../infrastructure/interfaces/questions";

export const isFormValid = (
  answers: AnswersToQuestions[],
  questionnaire: FormQuestions
): boolean => {
  const questionsAreAnsweredMap: Record<string, boolean> = {};
  questionnaire.forEach(({ questionLabel }) => {
    const existsResponseForQuestion = answers.findIndex(
      (answer) => answer.questionLabel === questionLabel
    );
    if (existsResponseForQuestion === -1) {
      questionsAreAnsweredMap[questionLabel] = false;
    } else {
      questionsAreAnsweredMap[questionLabel] = true;
    }
  });
  return !Object.values(questionsAreAnsweredMap).includes(false);
};
