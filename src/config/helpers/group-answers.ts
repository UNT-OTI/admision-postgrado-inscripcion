import { AnswersToQuestions } from "../../presentation/context/AdmissionProvider";
import { GroupedAnswers } from "../../infrastructure/interfaces/answers";

export const groupAnswersToQuestions = (
  markedQuestions: AnswersToQuestions[]
): GroupedAnswers => {
  const groupedAnswers: GroupedAnswers = [];
  markedQuestions.forEach((markedQuestion) => {
    const { questionLabel, itemLabel, itemValue, subItemLabel, subItemValue } =
      markedQuestion;
    if (itemValue) {
      groupedAnswers.push({
        questionLabel,
        itemLabel,
        itemValue,
      });
    } else {
      const existsAnswer = groupedAnswers.find(
        (answer) => answer.questionLabel === questionLabel
      );
      if (existsAnswer) {
        existsAnswer.items.push({
          itemLabel,
          subItemLabel,
          subItemValue,
        });
      } else {
        groupedAnswers.push({
          questionLabel,
          items: [
            {
              itemLabel: itemLabel,
              subItemLabel: subItemLabel,
              subItemValue: subItemValue,
            },
          ],
        });
      }
    }
  });
  return groupedAnswers;
};
